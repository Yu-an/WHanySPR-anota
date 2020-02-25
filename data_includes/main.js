var progressBarText = "წინ";

PennController.DebugOff();

PennController.ResetPrefix(null);

PennController.Sequence("consent", randomize("spr"), "send")

PennController("consent",
	defaultText
        .print()
    ,
	newHtml("consent form", "consent.html")
        .print()
    ,
    newText("my_consent_clear", "<br/><br/>")
    ,
    newText("name_text", "სახელი და გვარი:")
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
    newText("nationality", "ეროვნება")
        .settings.center()
    ,
    newTextInput("nationality_response")
        .settings.log()
        .settings.length(100)
        .settings.center()
        .print()
    ,
    newText("my_nationality_clear", "<br/><br/>"),
    newText("job_text", "იმეილი:")
        .settings.center()
    ,
    newTextInput("job_response")
        .settings.log()
        .settings.length(100)
        .settings.center()
        .print()
    ,
    newText("my_job_clear", "<br/><br/>")
    ,
    newText("phone", "ტელეფონი")
        .settings.center()
    ,
    newTextInput("phone_response")
        .settings.log()
        .settings.length(100)
        .settings.center()
        .print()
    ,
    newText("my_phone_clear", "<br/><br/>"),
    newText("age_text", "ასაკი:")
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
    newText("gender_text", "სქესი:")
        .settings.center()
    ,
    newScale("gender_response", "კაცი", "ქალი ")
        .settings.log()
        .settings.labelsPosition("right")
        .settings.center()
        .print()
    ,
    newText("my_gender_clear", "<br/><br/>")
    ,
    newText("town_text", "საცხოვრებელი ქალაქი:")
         .settings.center()
    ,
    newTextInput("town_response")
        .settings.log()
        .settings.length(100)
        .settings.center()
        .print()
    ,
    newText("my_town_clear", "<br/><br/>")
    ,
    newText("native_lang_text", "ქართული თქვენი მშობლიური ენაა?")
        .settings.center()
    ,
    newScale("native_lang_response", "კი", "არა")
        .settings.log()
        .settings.labelsPosition("right")
        .settings.center()
        .print()
    ,
    newText("my_native_lang_clear", "<br/><br/>")
    ,
    newText("other_lang_text", "სხვა ენები, რომელთაც ფლობთ:")
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
    newText("lang_to_parents_text", "რა ენაზე საუბრობდით თქვენს მშობლებთან?")
        .settings.center()
    ,
    newDropDown("lang_to_parents", "")
        .settings.add("ქართული", "მეგრული", "რუსული", "სომხური", "აზერბაიჯანული")
        .settings.center()
        .print()
    ,
    newText("my_lang_to_parents_clear", "<br/><br/>"),
    newText("lang_at_home_text", "რა ენაზე საუბრობთ ახლა სახლში?")
        .settings.center()
    ,
    newDropDown("lang_at_home", "")
        .settings.add("ქართული", "მეგრული", "რუსული", "სომხური", "აზერბაიჯანული")
        .settings.center()
        .print()
    ,
    newText("my_lang_at_home_clear", "<br/><br/>"),
    newButton("consent button", "თანახმა ვარ, მივიღო ექსპერიმენტში მონაწილეობა")
        .settings.center()
        .print()
        .wait()
);

PennController.Template("GeorgianSelfPacedReadingStimuli.csv",
    row => [
        "spr", "DashedSentence", {s: row.Sentence, display: "in place"},
        ...(row.Question !==  "" ? ["Question", {q: row.Question, as: ["დიახ", "არა"], hasCorrect: row.Answer}] : [])
    ]
);

PennController.SendResults("send");