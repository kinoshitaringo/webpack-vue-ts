/// 自定义 loader 以实现antd按需加载
let result = [];
module.exports = function (source) {
    const options = this.loaders.options || process.env.NODE_ENV === "development" ? {
        compress: false,
        sourceMap: true,
    } : {
            compress: ture,
            sourceMap: false,
        };
    const wrap = options.compress ? "" : "\r\n";
    const rAntd = /import\s*\{\s*\w+\s*\}\s*from\s*['"]ant\-design\-vue['"];?/; // 匹配 ant-design-vue
    let data = [];
    const rName = RegExp("(?<=\\{)[^}]*(?=\\})"); // 匹配花括号中的内容
    source.split('\r\n').forEach(line => {
        data.push(line.trim());
    });
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        if (rAntd.test(data[i])) {
            const name = data[i].match(rName)[0].trim(); // DataPicker import的组件名称
            const libName = name.replace(/(?<=^.+)[A-Z]+/g, (char) => '-' + char).toLocaleLowerCase(); // data-picker
            result.push(`import ${name} from 'ant-design-vue/lib/${libName}';` + wrap);
            result.push(`import 'ant-design-vue/lib/${libName}/style';` + wrap);
        } else {
            result.push(data[i] + wrap);
        }
    }
    console.log(result.join(""));
    return result.join("");
};