//var progressBarText = "";

PennController.DebugOff();

PennController.ResetPrefix(null);

//PennController.Sequence("consent", randomize("spr"), "send")
PennController.Sequence(randomize("spr"), "send")
/*
PennController("consent",
	defaultText
        .print()
    ,
	newHtml("consent form", "consent.html")
        .print()
    ,
    newText("my_consent_clear", "<br/><br/>")
    ,
    newText("name_text", "姓名:")
        .settings.center()
    ,
    newTextInput("name_response")
        .settings.log()
        .settings.length(100)
        .settings.center()
        .print()
    ,
    newText("my_name_clear", "<br/><br/>")
    ,
    newText("hometown", "出生地")
        .settings.center()
    ,
    newTextInput("hometown_response")
        .settings.log()
        .settings.length(100)
        .settings.center()
        .print()
    ,
    newText("my_hometown_clear", "<br/><br/>")
    
    ,
   
    newText("age_text", "年龄:")
        .settings.center()
    ,
    newTextInput("age_response")
        .settings.log()
        .settings.length(100)
        .settings.center()
        .print()
    ,
    newText("my_age_clear", "<br/><br/>")
    ,
    newText("gender_text", "性别:")
        .settings.center()
    ,
    newScale("gender_response", "男", "女 ")
        .settings.log()
        .settings.labelsPosition("right")
        .settings.center()
        .print()
    ,
    newText("my_gender_clear", "<br/><br/>")
   
    ,
    newText("native_lang_text", "请问您是否平时讲普通话?")
        .settings.center()
    ,
    newScale("native_lang_response", "是", "否")
        .settings.log()
        .settings.labelsPosition("right")
        .settings.center()
        .print()
    ,
    newText("my_native_lang_clear", "<br/><br/>")
    ,
    newText("other_lang_text", "请问您除了普通话之外，平时是否使用其他方言:")
        .settings.center()
    ,
    newTextInput("other_lang_response")
        .settings.log()
        .settings.length(100)
        .settings.center()
        .print()
    ,
    newText("my_other_lang_clear", "<br/><br/>")
    ,
    newButton("consent button", "我已阅读以上说明，并同意接受语感调查。")
        .settings.center()
        .print()
        .wait()
);
*/


PennController.Template("WhanySPR-anota-L1.csv",
    row => [
        "spr", "DashedSentence", {s: row.Sentence, display: "in place"},
        ...(row.Question !==  "" ? ["Question", {q: row.Response, as: ["接受", "不接受"]] : [])
    ]
);

PennController.SendResults("send");