// console.log("sanity check!");
Handlebars.templates = Handlebars.templates || {};

var templates = document.querySelectorAll(
    'script[type="text/x-handlebars-template"]'
);

Array.prototype.slice.call(templates).forEach(function(script) {
    Handlebars.templates[script.id] = Handlebars.compile(script.innerHTML);
});
////////DO NOT TOUCH - SETUP CODE///////////

var msg = {
    name: "MSG",
    nickName: "MyGrains",
    favFoods: ["Pomelo", "Chocolate", "Marmite", "Bread"]
};

var myCompiledTemplate = Handlebars.templates.msgid(msg);
console.log("myCompiledTemplate: ", myCompiledTemplate);
document.getElementsByClassName("msg-info")[0].innerHTML = myCompiledTemplate;
