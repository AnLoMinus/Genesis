// Data for creation days
const creationDays = [
  {
    id: 1,
    title: "יום ראשון - אור",
    description: "בריאת האור והבדלתו מהחושך",
    icon: "☀️",
    color: "#FFD700",
    content: {
      verses: `וַיֹּאמֶר אֱלֹהִים יְהִי אוֹר וַיְהִי אוֹר׃ וַיַּרְא אֱלֹהִים אֶת הָאוֹר כִּי טוֹב וַיַּבְדֵּל אֱלֹהִים בֵּין הָאוֹר וּבֵין הַחֹשֶׁךְ׃ וַיִּקְרָא אֱלֹהִים לָאוֹר יוֹם וְלַחֹשֶׁךְ קָרָא לָיְלָה וַיְהִי עֶרֶב וַיְהִי בֹקֶר יוֹם אֶחָד׃`,
      explanation: `ביום הראשון לבריאה נברא האור הראשוני - אור רוחני שקדם לאור הפיזי של המאורות. 
      אור זה מסמל את תחילת הסדר בעולם, כאשר ההבדלה בין אור לחושך מייצגת את ראשית התהוות הזמן והמחזוריות בעולם.
      
      בריאת האור מהווה את הצעד הראשון ביצירת סדר מתוך התוהו ובוהו. זהו מעבר מעולם של ערבוביה לעולם של הבחנה והבדלה.`,
      deepDive: {
        scientific: {
          title: "המבט המדעי",
          content: `המדע המודרני מתאר את האור כצורה של אנרגיה אלקטרומגנטית. מעניין לראות את ההקבלה בין תיאור בריאת האור כראשית הבריאה לבין תיאוריית המפץ הגדול, בה האור היה אחד המרכיבים הראשונים ביקום.
          
          תופעת האור היא בסיס להבנת חוקי הפיזיקה והיקום - מהירות האור היא קבוע יסודי בפיזיקה המודרנית.`,
        },
        philosophical: {
          title: "המבט הפילוסופי",
          content: `ההבדלה בין אור לחושך מייצגת את היכולת להבחין ולהבדיל - יסוד מהותי בתבונה האנושית. זוהי גם תחילת היכולת לזהות ניגודים והפכים בעולם.
          
          האור מסמל את התבונה והדעת, את היכולת להבין ולהבחין. החושך מייצג את העדר הידיעה והבהירות.`,
        },
        spiritual: {
          title: "המבט הרוחני",
          content: `האור הראשון נתפס במסורת כאור רוחני מיוחד, שנגנז לצדיקים לעתיד לבוא. הוא מסמל את האור האלוקי והחכמה שחודרים לעולם החומר.
          
          לפי המדרש, באור זה היה אדם הראשון צופה מסוף העולם ועד סופו - מסמל את הראייה הרוחנית המקיפה והעמוקה.`,
        },
        linguistic: {
          title: "המבט הלשוני",
          content: `המילה "אור" בעברית קשורה למושגים של בהירות והארה. המילה "יום" קשורה ל"יָם" - המסמל תנועה ופעילות.
          
          הביטוי "ויהי אור" מבטא יצירה מיידית - מעבר חד ממצב אחד לשני.`,
        },
      },
      insights: [
        {
          title: "סדר מתוך תוהו",
          content:
            "בריאת האור מסמלת את ראשית הסדר בעולם - המעבר מתוהו ובוהו לעולם מאורגן ומובחן",
        },
        {
          title: "כוח ההבדלה",
          content:
            "ההבדלה בין אור לחושך מלמדת על חשיבות ההבחנה וההפרדה בין דברים שונים בחיים",
        },
        {
          title: "אור פנימי",
          content:
            "האור הראשון מסמל את האור הפנימי שבכל אדם - היכולת להאיר ולהשפיע על הסביבה",
        },
        {
          title: "מחזוריות החיים",
          content:
            "יצירת היום והלילה מבססת את מחזוריות הזמן - תבנית בסיסית בטבע ובחיי האדם",
        },
        {
          title: "כוח המילה",
          content: "הביטוי 'ויאמר אלוהים' מלמד על כוח הדיבור והיצירה שבמילים",
        },
      ],
      interactiveElements: {
        reflection: {
          title: "שאלות להתבוננות",
          questions: [
            "איפה אתה מוצא 'אור' בחייך?",
            "מה מסמל עבורך המעבר מחושך לאור?",
            "איך אתה יכול להיות מקור של אור לסביבתך?",
            "איזה סוג של הבדלות והבחנות חשובות בחייך?",
            "מה המשמעות של מחזוריות היום והלילה עבורך?",
          ],
        },
        meditation: {
          title: "תרגיל מדיטציה",
          instructions: `עצום עיניים והתמקד באור שחודר דרך העפעפיים. שים לב למעבר העדין בין אור לחושך.
          
          התבונן במחשבות שעולות כשאתה חושב על אור וחושך. איך הן משפיעות על תחושותיך?
          
          דמיין את האור הראשוני של הבריאה - אור רוחני טהור שממלא את כל המציאות.`,
          duration: "5 דקות",
        },
        practicalExercise: {
          title: "תרגיל מעשי",
          instructions:
            "במהלך היום, שים לב לרגעי המעבר בין אור לחושך. כתוב יומן המתעד את השינויים באור ואת השפעתם על מצב רוחך ורמת האנרגיה שלך.",
          duration: "במהלך היום",
        },
      },
    },
  },
  {
    id: 2,
    title: "יום שני - רקיע",
    description: "בריאת הרקיע והבדלת המים",
    icon: "🌌",
    color: "#4B0082",
    content: {
      verses: `וַיֹּאמֶר אֱלֹהִים יְהִי רָקִיעַ בְּתוֹךְ הַמָּיִם וִיהִי מַבְדִּיל בֵּין מַיִם לָמָיִם׃ וַיַּעַשׂ אֱלֹהִים אֶת־הָרָקִיעַ וַיַּבְדֵּל בֵּין הַמַּיִם אֲשֶׁר מִתַּחַת לָרָקִיעַ וּבֵין הַמַּיִם אֲשֶׁר מֵעַל לָרָקִיעַ וַיְהִי־כֵן׃ וַיִּקְרָא אֱלֹהִים לָרָקִיעַ שָׁמָיִם וַיְהִי־עֶרֶב וַיְהִי־בֹקֶר יוֹם שֵׁנִי׃`,
      explanation: `ביום השני נברא הרקיע - המרחב המבדיל בין המים העליונים לתחתונים. 
      זוהי יצירת המרחב והאטמוספירה המאפשרת חיים על פני כדור הארץ.
      
      הרקיע מסמל את הגבול והסדר בבריאה, המאפשר קיום נפרד ומובחן לכל דבר. יום זה ממשיך את רעיון ההבדלה שהחל ביום הראשון.`,
      deepDive: {
        scientific: {
          title: "המבט המדעי",
          content: `האטמוספירה של כדור הארץ היא שכבת גזים המקיפה את כדור הארץ ומגינה על החיים. 
          היא מכילה את האוויר שאנו נושמים ומסננת קרינה מזיקה.
          
          המים באטמוספירה (בצורת אדים) והמים על פני כדור הארץ מקיימים מחזור מים מתמיד, המאפשר חיים.`,
        },
        philosophical: {
          title: "המבט הפילוסופי",
          content: `הרקיע מייצג את הגבולות וההפרדות ההכרחיים לקיום. כל דבר זקוק למרחב משלו כדי להתקיים ולהתפתח.
          
          ההבדלה בין מים למים מלמדת על החשיבות של איזון בין כוחות מנוגדים - בין שמים לארץ, בין רוח לחומר.`,
        },
        spiritual: {
          title: "המבט הרוחני",
          content: `הרקיע מסמל את ההבדלה בין העולם הרוחני (מים עליונים) לעולם הגשמי (מים תחתונים).
          
          לפי המדרש, המים התחתונים בוכים על הפרידה מהמים העליונים - ביטוי לכמיהה של החומר אל הרוח.`,
        },
        linguistic: {
          title: "המבט הלשוני",
          content: `המילה "רקיע" קשורה לשורש רק"ע - המבטא התפשטות והתרחבות. 
          
          "שמים" מורכב מ"שם-מים" - המקום בו נמצאים המים העליונים, או מלשון "שם" - המקום הרחוק והנשגב.`,
        },
      },
      insights: [
        {
          title: "חשיבות הגבולות",
          content: "גבולות ברורים הם תנאי הכרחי ליצירה ולהתפתחות",
        },
        {
          title: "איזון עדין",
          content: "הרקיע מייצג את האיזון העדין בין כוחות שונים בחיים",
        },
        {
          title: "מרחב להתפתחות",
          content: "יצירת מרחב מאפשרת צמיחה והתפתחות של כל דבר בתחומו",
        },
        {
          title: "חיבור והפרדה",
          content: "לעיתים דווקא ההפרדה מאפשרת חיבור עמוק יותר",
        },
        {
          title: "שאיפה למעלה",
          content: "המים התחתונים מבטאים את הכמיהה הטבעית להתעלות",
        },
      ],
      interactiveElements: {
        reflection: {
          title: "שאלות להתבוננות",
          questions: [
            "אילו גבולות בחייך עוזרים לך לצמוח?",
            "האם יש תחומים בחייך הזקוקים להפרדה ברורה יותר?",
            "מה מסמל עבורך המתח בין שמים וארץ?",
            "איך אתה מאזן בין השאיפות הרוחניות והצרכים הגשמיים?",
            "האם חווית מצבים בהם דווקא ריחוק יצר קרבה?",
          ],
        },
        meditation: {
          title: "תרגיל מדיטציה",
          instructions: `שב בנוחות והתבונן במרחב שסביבך. הרגש את האוויר שאתה נושם - המרחב שבין שמים לארץ.
          
          דמיין את עצמך מתבונן ברקיע - המרחב האינסופי שמעליך. חוש את התנועה המתמדת של האוויר והעננים.
          
          הרגש את האיזון בין הכוחות השונים בגופך - בין קלות וכבדות, בין תנועה ומנוחה.`,
          duration: "7 דקות",
        },
        practicalExercise: {
          title: "תרגיל מעשי",
          instructions:
            "צא החוצה והתבונן בשמים. צלם או צייר את מה שאתה רואה. שים לב לשכבות השונות של האטמוספירה - עננים בגבהים שונים, ציפורים, מטוסים.",
          duration: "15 דקות",
        },
      },
    },
  },
  {
    id: 3,
    title: "יום שלישי - יבשה וצמחים",
    description: "התגלות היבשה וצמיחת הצומח",
    icon: "🌱",
    color: "#228B22",
    content: {
      verses: `וַיֹּאמֶר אֱלֹהִים יִקָּווּ הַמַּיִם מִתַּחַת הַשָּׁמַיִם אֶל מָקוֹם אֶחָד וְתֵרָאֶה הַיַּבָּשָׁה וַיְהִי כֵן׃ וַיִּקְרָא אֱלֹהִים לַיַּבָּשָׁה אֶרֶץ וּלְמִקְוֵה הַמַּיִם קָרָא יַמִּים וַיַּרְא אֱלֹהִים כִּי טוֹב׃ וַיֹּאמֶר אֱלֹהִים תַּדְשֵׁא הָאָרֶץ דֶּשֶׁא עֵשֶׂב מַזְרִיעַ זֶרַע עֵץ פְּרִי עֹשֶׂה פְּרִי לְמִינוֹ אֲשֶׁר זַרְעוֹ בוֹ עַל הָאָרֶץ וַיְהִי כֵן׃`,
      explanation: `היום השלישי מתאפיין בשתי בריאות מרכזיות: התגלות היבשה מתוך המים, וצמיחת הצומח על פני האדמה. 
      
      זהו יום של יצירה כפולה, המסמל את הפוטנציאל הטמון בארץ להצמיח ולהוציא מן הכוח אל הפועל. היבשה מייצגת את היסוד היציב והקבוע, בעוד הצמחים מייצגים את כוח הצמיחה וההתחדשות המתמדת.`,
      deepDive: {
        scientific: {
          title: "המבט המדעי",
          content: `התהליך הגיאולוגי של היווצרות היבשות והתפתחות החיים הצמחיים הוא תהליך מורכב ומתמשך. 
          
          הצמחים היו הראשונים שהתפתחו על היבשה והם שיצרו את התנאים המתאימים להתפתחות חיים מורכבים יותר דרך יצירת חמצן ומזון.
          
          מחזור הפוטוסינתזה שהצמחים מקיימים הוא הבסיס לקיום החיים על פני כדור הארץ.`,
        },
        philosophical: {
          title: "המבט הפילוסופי",
          content: `היבשה מייצגת את היסוד היציב והקבוע בחיים, בעוד הצמחים מייצגים את הפוטנציאל לצמיחה והתחדשות.
          
          המעבר ממים ליבשה מסמל את היכולת לצאת ממצב נוזלי ולא מוגדר למצב יציב ומובנה.
          
          הזרע הטמון בצמח מייצג את רעיון ההמשכיות והשכפול העצמי - היכולת להעביר את מהותנו הלאה.`,
        },
        spiritual: {
          title: "המבט הרוחני",
          content: `היום השלישי מדגיש את כוח הצמיחה הרוחנית - היכולת לצמוח מתוך מגבלות החומר.
          
          העובדה שהצמחים צומחים כלפי מעלה מסמלת את השאיפה הטבעית של הבריאה להתעלות.
          
          הברכה הראשונה בתורה ניתנת לצמחים - "פרו ורבו" של הצומח, המבטא את ברכת הפריון והשפע.`,
        },
        linguistic: {
          title: "המבט הלשוני",
          content: `המילה "תדשא" מבטאת צמיחה ספונטנית ועצמאית של הארץ, בעוד "מזריע זרע" מדגיש את ההמשכיות.
          
          "למינו" - מדגיש את הסדר והארגון בבריאה, כל מין שומר על ייחודיותו.`,
        },
      },
      insights: [
        {
          title: "כוח הצמיחה",
          content: "כל דבר בבריאה טומן בתוכו את הפוטנציאל לצמיחה והתפתחות",
        },
        {
          title: "סדר והתפתחות",
          content: "הצמיחה מתרחשת בשלבים - קודם היבשה ורק אז הצמחים",
        },
        {
          title: "יציבות ושינוי",
          content:
            "השילוב בין היבשה היציבה והצמחים המתחדשים מלמד על האיזון הנדרש בחיים",
        },
        {
          title: "כוח ההמשכיות",
          content: "הזרע מסמל את היכולת להעביר את מהותנו הלאה ולהשפיע על העתיד",
        },
        {
          title: "עצמאות וחיבור",
          content:
            "הצמחים צומחים באופן עצמאי אך תלויים באדמה - כך גם אנחנו בחיינו",
        },
      ],
      interactiveElements: {
        reflection: {
          title: "שאלות להתבוננות",
          questions: [
            "מהם ה'זרעים' שאתה זורע בחייך?",
            "איפה אתה מוצא את האיזון בין יציבות לצמיחה?",
            "מה מאפשר לך לצמוח ולהתפתח?",
            "איך אתה יכול לטפח את הפוטנציאל הטמון בך?",
            "מהי המורשת שאתה רוצה להשאיר אחריך?",
          ],
        },
        meditation: {
          title: "תרגיל מדיטציה",
          instructions: `דמיין את עצמך כזרע הטמון באדמה. חוש את החום והלחות שעוטפים אותך.
          
          הרגש איך אתה מתחיל לנבוט, שולח שורשים למטה ונצר כלפי מעלה.
          
          התבונן בתהליך הצמיחה האיטי והמתמשך, בכוח החיים שפועם בך.`,
          duration: "10 דקות",
        },
        practicalExercise: {
          title: "תרגיל מעשי",
          instructions: `קח זרע או שתיל קטן ושתול אותו באדמה. טפל בו במשך שבוע ועקוב אחר התפתחותו.
          
          רשום יומן המתעד את תהליך הצמיחה ואת המחשבות והתובנות שעולות בך תוך כדי.`,
          duration: "שבוע",
        },
      },
    },
  },
  {
    id: 4,
    title: "יום רביעי - מאורות",
    description: "בריאת השמש, הירח והכוכבים",
    icon: "🌞",
    color: "#FFA500",
    content: {
      verses: `וַיֹּאמֶר אֱלֹהִים יְהִי מְאֹרֹת בִּרְקִיעַ הַשָּׁמַיִם לְהַבְדִּיל בֵּין הַיּוֹם וּבֵין הַלָּיְלָה וְהָיוּ לְאֹתֹת וּלְמוֹעֲדִים וּלְיָמִים וְשָׁנִים׃ וְהָיוּ לִמְאוֹרֹת בִּרְקִיעַ הַשָּׁמַיִם לְהָאִיר עַל הָאָרֶץ וַיְהִי כֵן׃ וַיַּעַשׂ אֱלֹהִים אֶת שְׁנֵי הַמְּאֹרֹת הַגְּדֹלִים אֶת הַמָּאוֹר הַגָּדֹל לְמֶמְשֶׁלֶת הַיּוֹם וְאֶת הַמָּאוֹר הַקָּטֹן לְמֶמְשֶׁלֶת הַלַּיְלָה וְאֵת הַכּוֹכָבִים׃`,
      explanation: `היום הרביעי מביא את בריאת המאורות - השמש, הירח והכוכבים. 
      
      המאורות נבראו למטרות מרובות: להבדיל בין יום ולילה, לשמש כאותות למועדים וזמנים, ולהאיר את הארץ. הם מייצגים את הסדר הקוסמי והמחזוריות של הזמן.`,
      deepDive: {
        scientific: {
          title: "המבט המדעי",
          content: `השמש היא מקור האנרגיה העיקרי של כדור הארץ, המאפשרת חיים דרך תהליך הפוטוסינתזה.
          
          הירח משפיע על כדור הארץ דרך כוח המשיכה שלו, יוצר את תופעת הגאות והשפל ומשפיע על מחזורים ביולוגיים רבים.
          
          הכוכבים שימשו מאז ומעולם כמצפן טבעי לניווט ולקביעת עונות השנה.`,
        },
        philosophical: {
          title: "המבט הפילוסופי",
          content: `המאורות מייצגים את הדואליות בטבע - יום ולילה, אור וחושך, פעילות ומנוחה.
          
          הם מלמדים על היחסיות בגדולה - השמש והירח נראים לנו באותו גודל למרות ההבדל העצום ביניהם.
          
          סדר הזמנים שהם יוצרים מאפשר תכנון, התפתחות והתקדמות.`,
        },
        spiritual: {
          title: "המבט הרוחני",
          content: `המאורות מסמלים את ההשגחה האלוקית המתמדת - "שומר ישראל לא ינום ולא יישן".
          
          הירח בהתחדשותו מסמל את יכולת ההתחדשות של האדם והעם.
          
          הכוכבים מסמלים את ההבטחה לאברהם - "כה יהיה זרעך", ואת הפוטנציאל האינסופי.`,
        },
        linguistic: {
          title: "המבט הלשוני",
          content: `המילה "מאורות" קשורה ל"אור" אך מדגישה את היותם כלים להעברת האור.
          
          "לממשלת" - מלשון ממשלה והשפעה, מדגיש את תפקידם בהנהגת מערכות החיים.
          
          "אותות ומועדים" - מלמד על תפקידם כסימנים וכמכווני זמן.`,
        },
      },
      insights: [
        {
          title: "סדר וזמן",
          content: "המאורות מייצרים את מסגרת הזמן המאפשרת סדר וארגון בחיים",
        },
        {
          title: "השפעה עקיפה",
          content: "כמו המאורות, לעיתים השפעה משמעותית היא דווקא עקיפה ושקטה",
        },
        {
          title: "מחזוריות החיים",
          content: "המחזוריות של המאורות מלמדת על מחזורי צמיחה והתחדשות בחיים",
        },
        {
          title: "תפקיד כפול",
          content: "המאורות משמשים גם להארה וגם לסימון זמנים - ריבוי תפקידים",
        },
        {
          title: "נקודת מבט",
          content: "גודל המאורות תלוי בנקודת המבט - לימוד על יחסיות התפיסה",
        },
      ],
      interactiveElements: {
        reflection: {
          title: "שאלות להתבוננות",
          questions: [
            "איך אתה מתייחס למחזורי הזמן בחייך?",
            "מה מסמל עבורך המעבר בין יום ללילה?",
            "איך אתה משתמש בזמן ככלי להתפתחות?",
            "האם יש לך 'מאורות' - דמויות מאירות בחייך?",
            "איך אתה מתמודד עם מחזורי עלייה וירידה?",
          ],
        },
        meditation: {
          title: "תרגיל מדיטציה",
          instructions: `שב בשקט והתבונן באור השמש או הירח (בהתאם לזמן).
          
          הרגש את המחזוריות של הנשימה שלך - כמו מחזור היום והלילה.
          
          חשוב על האור והחום שאתה מקבל מהשמש, ועל ההשתקפות העדינה של אור הירח.`,
          duration: "8 דקות",
        },
        practicalExercise: {
          title: "תרגיל מעשי",
          instructions: `עקוב אחר השמש במשך יום שלם - צלם או רשום את מיקומה בשמיים בשעות שונות.
          
          שים לב לשינויים באור, בצל, ובהשפעה על הסביבה והאווירה.
          
          נסה לזהות את הקשר בין מיקום השמש לפעילויות היומיום שלך.`,
          duration: "יום שלם",
        },
      },
    },
  },
  {
    id: 5,
    title: "יום חמישי - דגים ועופות",
    description: "בריאת חיות המים והעופות",
    icon: "🐠",
    color: "#4169E1",
    content: {
      verses: `וַיֹּאמֶר אֱלֹהִים יִשְׁרְצוּ הַמַּיִם שֶׁרֶץ נֶפֶשׁ חַיָּה וְעוֹף יְעוֹפֵף עַל הָאָרֶץ עַל פְּנֵי רְקִיעַ הַשָּׁמָיִם׃ וַיִּבְרָא אֱלֹהִים אֶת הַתַּנִּינִם הַגְּדֹלִים וְאֵת כָּל נֶפֶשׁ הַחַיָּה הָרֹמֶשֶׂת אֲשֶׁר שָׁרְצוּ הַמַּיִם לְמִינֵהֶם וְאֵת כָּל עוֹף כָּנָף לְמִינֵהוּ וַיַּרְא אֱלֹהִים כִּי טוֹב׃ וַיְבָרֶךְ אֹתָם אֱלֹהִים לֵאמֹר פְּרוּ וּרְבוּ וּמִלְאוּ אֶת הַמַּיִם בַּיַּמִּים וְהָעוֹף יִרֶב בָּאָרֶץ׃`,
      explanation: `היום החמישי מביא את ראשית החיים בעלי התנועה - יצורי המים והעופות. 
      
      זהו יום של תנועה וחיות, בו נבראו הברואים הראשונים שזכו לברכה מפורשת של "פרו ורבו". היום הזה מייצג את המעבר מהצומח הנייח לבעלי החיים הנעים בחופשיות במרחב.`,
      deepDive: {
        scientific: {
          title: "המבט המדעי",
          content: `המים היו אכן הסביבה הראשונה בה התפתחו חיים מורכבים על פני כדור הארץ.
          
          המעבר מחיים ימיים לחיים על היבשה היה אחד השלבים המשמעותיים באבולוציה, כאשר העופות התפתחו מאוחר יותר מזוחלים.
          
          הים עדיין מכיל את המגוון הביולוגי הגדול ביותר על פני כדור הארץ.`,
        },
        philosophical: {
          title: "המבט הפילוסופי",
          content: `התנועה החופשית מסמלת את החירות והבחירה - היכולת לנוע ולבחור את הכיוון.
          
          הדגים והעופות מייצגים שתי דרכי התמודדות עם החיים - שחייה עם הזרם או התעלות מעליו.
          
          הברכה הראשונה לבעלי חיים מדגישה את חשיבות ההתרבות וההמשכיות בטבע.`,
        },
        spiritual: {
          title: "המבט הרוחני",
          content: `העופות המתעופפים מסמלים את השאיפה להתעלות רוחנית ואת הקשר בין שמים וארץ.
          
          הדגים, החיים במים ומוסתרים מהעין, מסמלים את הברכה הנסתרת והשפע הבלתי נראה.
          
          "שרץ נפש חיה" - מבטא את ראשית הופעת הנפש החיה בבריאה.`,
        },
        linguistic: {
          title: "המבט הלשוני",
          content: `"ישרצו" - מלשון ריבוי ושפע, מבטא התרבות מהירה ועצומה.
          
          "התנינים הגדולים" - מדגיש את הגודל והעוצמה של יצורי המים.
          
          "יעופף" - השורש עו"ף מבטא תנועה מהירה והתעלות.`,
        },
      },
      insights: [
        {
          title: "חופש התנועה",
          content: "היכולת לנוע בחופשיות היא ביטוי לחירות ולבחירה האישית",
        },
        {
          title: "דרכי התמודדות",
          content:
            "כל יצור מתמודד עם אתגרי החיים בדרכו הייחודית - בים או באוויר",
        },
        {
          title: "ברכת הפריון",
          content: "הברכה הראשונה מדגישה את חשיבות ההמשכיות והשפע בבריאה",
        },
        {
          title: "סביבות חיים",
          content: "היכולת להתקיים בסביבות שונות מעידה על כוח ההסתגלות",
        },
        {
          title: "תנועה ומטרה",
          content: "התנועה החופשית צריכה להיות מכוונת למטרה ותכלית",
        },
      ],
      interactiveElements: {
        reflection: {
          title: "שאלות להתבוננות",
          questions: [
            "איך אתה משתמש בחופש התנועה שלך?",
            "האם אתה 'שוחה עם הזרם' או 'מתעופף מעליו'?",
            "מה מסמלת עבורך היכולת לנוע בחופשיות?",
            "איך אתה מתמודד עם שינויים בסביבת החיים שלך?",
            "מהי המשמעות של 'פרו ורבו' בחייך?",
          ],
        },
        meditation: {
          title: "תרגיל מדיטציה",
          instructions: `שב בנוחות ודמיין את עצמך כציפור המרחפת בשמים.
          
          הרגש את החופש והקלילות של התעופה, את הרוח הנושבת.
          
          עכשיו דמיין את עצמך כדג השוחה במעמקי הים, מרגיש את זרימת המים.`,
          duration: "10 דקות",
        },
        practicalExercise: {
          title: "תרגיל מעשי",
          instructions: `צא לטבע והתבונן בציפורים או בדגים (בהתאם למה שזמין).
          
          שים לב לדפוסי התנועה שלהם, לאופן בו הם מתקשרים זה עם זה.
          
          נסה לחקות את תנועותיהם בגופך - תנועות של ריחוף או שחייה.`,
          duration: "20 דקות",
        },
      },
    },
  },
  {
    id: 6,
    title: "יום שישי - חיות ואדם",
    description: "בריאת חיות היבשה והאדם",
    icon: "👥",
    color: "#8B4513",
    content: {
      verses: `וַיֹּאמֶר אֱלֹהִים תּוֹצֵא הָאָרֶץ נֶפֶשׁ חַיָּה לְמִינָהּ בְּהֵמָה וָרֶמֶשׂ וְחַיְתוֹ אֶרֶץ לְמִינָהּ וַיְהִי כֵן׃ וַיַּעַשׂ אֱלֹהִים אֶת חַיַּת הָאָרֶץ לְמִינָהּ וְאֶת הַבְּהֵמָה לְמִינָהּ וְאֵת כָּל רֶמֶשׂ הָאֲדָמָה לְמִינֵהוּ וַיַּרְא אֱלֹהִים כִּי טוֹב׃ וַיֹּאמֶר אֱלֹהִים נַעֲשֶׂה אָדָם בְּצַלְמֵנוּ כִּדְמוּתֵנוּ וְיִרְדּוּ בִדְגַת הַיָּם וּבְעוֹף הַשָּׁמַיִם וּבַבְּהֵמָה וּבְכָל הָאָרֶץ וּבְכָל הָרֶמֶשׂ הָרֹמֵשׂ עַל הָאָרֶץ׃`,
      explanation: `היום השישי מביא את שיא הבריאה - יצירת חיות היבשה ולבסוף האדם. 
      
      זהו יום מיוחד בו נבראו היצורים המורכבים ביותר, והאדם שנברא בצלם אלוקים. האדם מקבל שליטה על הבריאה ואחריות לשמור עליה.`,
      deepDive: {
        scientific: {
          title: "המבט המדעי",
          content: `היונקים הם מהיצורים המפותחים ביותר מבחינה אבולוציונית, עם מערכת עצבים מורכבת ויכולות קוגניטיביות גבוהות.
        
        המוח האנושי הוא המבנה המורכב ביותר הידוע לנו ביקום, עם כ-86 מיליארד תאי עצב ורשת של טריליוני קשרים.
        
        היכולת האנושית לחשיבה מופשטת, תכנון לטווח ארוך ויצירת תרבות היא ייחודית בעולם החי.`,
        },
        philosophical: {
          title: "המבט הפילוסופי",
          content: `בריאת האדם בצלם אלוקים מעלה שאלות על מהות האדם ותפקידו בעולם.
        
        השליטה שניתנה לאדם על הבריאה מחייבת אותו באחריות מוסרית כלפי העולם וברואיו.
        
        הדואליות של האדם - היותו יצור פיזי וגם רוחני - מייצרת מתח מתמיד בין החומר לרוח.`,
        },
        spiritual: {
          title: "המבט הרוחני",
          content: `"נעשה אדם" - לשון רבים, מלמד על התייעצות עם פמליא של מעלה ועל מורכבות האדם.
        
        צלם אלוקים באדם מתבטא ביכולת הבחירה החופשית, היצירה והדיבור.
        
        האדם נברא יחידי ללמד שכל אדם הוא עולם מלא וכל הנשמות שוות בערכן.`,
        },
        linguistic: {
          title: "המבט הלשוני",
          content: `"אדם" מלשון "אדמה" - מדגיש את הקשר לאדמה וגם מלשון "אדמה לעליון" - השאיפה להידמות לבורא.
        
        "בצלמנו כדמותנו" - שני ביטויים המדגישים את הייחודיות של האדם.
        
        "וירדו" - מלשון שליטה אך גם מלשון ירידה - האחריות עלולה להוביל לירידה.`,
        },
      },
      insights: [
        {
          title: "אחריות ושליטה",
          content: "הכוח והשליטה שניתנו לאדם מחייבים אחריות ושיקול דעת",
        },
        {
          title: "ייחודיות האדם",
          content: "צלם אלוקים באדם מתבטא ביכולת הבחירה, היצירה והתיקון",
        },
        {
          title: "שותפות בבריאה",
          content: "האדם נקרא להיות שותף בתיקון ושכלול העולם",
        },
        {
          title: "איזון עדין",
          content: "האתגר למצוא איזון בין שליטה לשמירה, בין ניצול לטיפוח",
        },
        {
          title: "ערך האדם",
          content: "כל אדם הוא עולם מלא וכל חיי אדם הם בעלי ערך אינסופי",
        },
      ],
      interactiveElements: {
        reflection: {
          title: "שאלות להתבוננות",
          questions: [
            "איך אתה מבטא את צלם האלוקים שבך?",
            "מהי האחריות שלך כלפי העולם וסביבתך?",
            "איך אתה מאזן בין שליטה לשמירה?",
            "מה המשמעות של היותך נברא יחידי?",
            "איך אתה יכול להיות שותף בתיקון העולם?",
          ],
        },
        meditation: {
          title: "תרגיל מדיטציה",
          instructions: `שב בנוחות והתבונן בכפות ידיך - כלי היצירה והעשייה שלך.
        
        חשוב על היכולות המיוחדות שניתנו לך כאדם - הבחירה, היצירה, הדיבור.
        
        הרגש את האחריות והזכות להיות חלק מהבריאה ולהשפיע עליה.`,
          duration: "10 דקות",
        },
        practicalExercise: {
          title: "תרגיל מעשי",
          instructions: `בחר פעולה אחת שבה תיקח אחריות גדולה יותר על סביבתך - למשל, מיחזור, עזרה לאחרים, או טיפוח הסביבה.
        
        תעד את ההשפעה של פעולותיך על הסביבה ועל אחרים.
        
        חשוב איך אתה יכול להרחיב את מעגל ההשפעה החיובית שלך.`,
          duration: "יום שלם",
        },
      },
    },
  },
  {
    id: 7,
    title: "יום שביעי - שבת",
    description: "יום המנוחה וההתבוננות",
    icon: "✨",
    color: "#4B0082",
    content: {
      verses: `וַיְכֻלּוּ הַשָּׁמַיִם וְהָאָרֶץ וְכָל צְבָאָם׃ וַיְכַל אֱלֹהִים בַּיּוֹם הַשְּׁבִיעִי מְלַאכְתּוֹ אֲשֶׁר עָשָׂה וַיִּשְׁבֹּת בַּיּוֹם הַשְּׁבִיעִי מִכָּל מְלַאכְתּוֹ אֲשֶׁר עָשָׂה׃ וַיְבָרֶךְ אֱלֹהִים אֶת יוֹם הַשְּׁבִיעִי וַיְקַדֵּשׁ אֹתוֹ כִּי בוֹ שָׁבַת מִכָּל מְלַאכְתּוֹ אֲשֶׁר בָּרָא אֱלֹהִים לַעֲשׂוֹת׃`,
      explanation: `היום השביעי מביא את השלמות לבריאה דרך המנוחה והקדושה. 
      
      זהו היום היחיד שזכה לברכה וקדושה מיוחדת, והוא מהווה את שיא הבריאה לא דרך יצירה חדשה אלא דרך השלמה והתבוננות.`,
      deepDive: {
        scientific: {
          title: "המבט המדעי",
          content: `המחקר המודרני מראה את חשיבות המנוחה והמחזוריות בטבע - מרמת התא ועד למערכות אקולוגיות שלמות.
        
        המוח האנושי זקוק לתקופות של מנוחה והתחדשות לשם עיבוד מידע ושמירה על בריאות נפשית.
        
        מחזור השבוע בן שבעת הימים הוא יצירה תרבותית ייחודית שהשפיעה על העולם כולו.`,
        },
        philosophical: {
          title: "המבט הפילוסופי",
          content: `השביתה ממלאכה מאפשרת מרחב להתבוננות ורפלקציה על משמעות החיים והיצירה.
        
        המנוחה אינה רק העדר עשייה אלא מצב חיובי של שלמות והרמוניה.
        
        הקדושה נוצרת דווקא דרך ההימנעות והגבלת הפעילות - פרדוקס של יצירה דרך שביתה.`,
        },
        spiritual: {
          title: "המבט הרוחני",
          content: `השבת היא "מעין עולם הבא" - טעימה מהשלמות העתידית של הבריאה.
        
        הברכה והקדושה של השבת מלמדות על הקשר המיוחד בין הזמן לקדושה.
        
        השביתה ממלאכה מאפשרת התחברות לממד הרוחני של המציאות.`,
        },
        linguistic: {
          title: "המבט הלשוני",
          content: `"ויכל" - מלשון כליון והשלמה, וגם מלשון כלי - הכלי המכיל את כל הבריאה.
        
        "וישבות" - השורש שב"ת מבטא הפסקה חיובית ומכוונת, לא סתם חוסר פעילות.
        
        "ויקדש" - הפיכת הזמן למקודש, יצירת ממד חדש של קדושה בזמן.`,
        },
      },
      insights: [
        {
          title: "שלמות במנוחה",
          content: "השלמות האמיתית מגיעה דווקא דרך היכולת לעצור ולהתבונן",
        },
        {
          title: "קדושת הזמן",
          content: "השבת מלמדת על היכולת לקדש את הזמן ולהעניק לו משמעות מיוחדת",
        },
        {
          title: "מעגל ומטרה",
          content: "השבת נותנת משמעות ותכלית לכל מעגל היצירה שקדם לה",
        },
        {
          title: "מנוחה פעילה",
          content:
            "המנוחה האמיתית היא מצב של התעלות והתחדשות, לא רק העדר מלאכה",
        },
        {
          title: "שותפות בקדושה",
          content: "השביתה ממלאכה הופכת את האדם לשותף בקדושת השבת",
        },
      ],
      interactiveElements: {
        reflection: {
          title: "שאלות להתבוננות",
          questions: [
            "מה המשמעות של מנוחה אמיתית עבורך?",
            "איך אתה יוצר קדושה בזמן?",
            "מה מאפשרת לך העצירה וההתבוננות?",
            "איך אתה מבטא את השלמות בחייך?",
            "מה הקשר בין מנוחה להתחדשות בחייך?",
          ],
        },
        meditation: {
          title: "תרגיל מדיטציה",
          instructions: `שב בנוחות והרגש את המנוחה השלמה בגופך ובנפשך.
        
        הרפה מכל מאמץ ומחשבה על עשייה. תן לעצמך להיות פשוט נוכח ברגע.
        
        חוש את הקדושה והשלווה שבמנוחה המודעת.`,
          duration: "15 דקות",
        },
        practicalExercise: {
          title: "תרגיל מעשי",
          instructions: `קבע לעצמך זמן קבוע של "שבת" - תקופה של מנוחה והתבוננות מודעת.
        
        במהלך זמן זה, הימנע משימוש בטכנולוגיה והקדש את הזמן להתבוננות, לימוד או שיחות משמעותיות.
        
        רשום את התובנות והתחושות שעולות מתוך המנוחה המכוונת.`,
          duration: "שעתיים",
        },
      },
    },
  },
];

// Function to create day cards
function createDayCards() {
  const daysContainer = document.querySelector(".row.g-4");

  creationDays.forEach((day) => {
    const card = document.createElement("div");
    card.className = "col-md-4 fade-in";
    card.innerHTML = `
            <div class="card h-100" style="border-top: 5px solid ${day.color}">
                <div class="card-body">
                    <div class="display-1 text-center mb-3">${day.icon}</div>
                    <h5 class="card-title text-center">${day.title}</h5>
                    <p class="card-text">${day.description}</p>
                    <button class="btn btn-primary w-100" onclick="showDayDetails(${day.id})">
                        למד עוד
                    </button>
                </div>
            </div>
        `;
    daysContainer.appendChild(card);
  });
}

// Add helper function to close all modals
function closeAllModals() {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modalEl) => {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) {
      modal.hide();
      // Remove modal immediately after hiding
      modalEl.remove();
    }
  });
}

// Update showDayDetails function
function showDayDetails(dayId) {
  const day = creationDays.find((d) => d.id === dayId);
  if (!day) return;

  // Close existing modals first
  const existingModals = document.querySelectorAll(".modal");
  existingModals.forEach((modalEl) => {
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) {
      modalEl.addEventListener(
        "hidden.bs.modal",
        () => {
          modalEl.remove();
          // Create and show new modal after the old one is removed
          createAndShowDayModal(day);
        },
        { once: true }
      );
      modal.hide();
    }
  });

  // If no existing modals, create and show new modal immediately
  if (existingModals.length === 0) {
    createAndShowDayModal(day);
  }
}

// New helper function to create and show the day modal
function createAndShowDayModal(day) {
  const savedNotes = getNotes()[day.id] || "";

  const modalContent = `
    <div class="modal fade" id="dayModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header" style="border-top: 5px solid ${day.color}">
            <h5 class="modal-title">${day.title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="text-center mb-4">
              <span class="display-1">${day.icon}</span>
            </div>
            
            <!-- Verses Section -->
            <div class="verses-section mb-4">
              <h6 class="fw-bold">הפסוקים:</h6>
              <p class="text-center fs-5 hebrew-text">${day.content.verses}</p>
            </div>

            <!-- Explanation Section -->
            <div class="explanation-section mb-4">
              <h6 class="fw-bold">הסבר:</h6>
              <p>${day.content.explanation}</p>
            </div>

            <!-- Deep Dive Sections -->
            <div class="deep-dive-section mb-4">
              <h6 class="fw-bold mb-3">העמקה:</h6>
              <div class="accordion" id="deepDiveAccordion">
                ${Object.entries(day.content.deepDive)
                  .map(
                    ([key, section], index) => `
                  <div class="accordion-item">
                    <h2 class="accordion-header">
                      <button class="accordion-button ${
                        index === 0 ? "" : "collapsed"
                      }" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${key}">
                        ${section.title}
                      </button>
                    </h2>
                    <div id="collapse${key}" class="accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }" data-bs-parent="#deepDiveAccordion">
                      <div class="accordion-body">
                        ${section.content}
                      </div>
                    </div>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>

            <!-- Insights Section -->
            <div class="insights-section mb-4">
              <h6 class="fw-bold">תובנות:</h6>
              <div class="insights-carousel">
                ${day.content.insights
                  .map(
                    (insight) => `
                  <div class="insight-card">
                    <h6 class="insight-title">${insight.title}</h6>
                    <p class="insight-content">${insight.content}</p>
                  </div>
                `
                  )
                  .join("")}
              </div>
            </div>

            <!-- Interactive Elements -->
            <div class="interactive-section mb-4">
              <h6 class="fw-bold">אינטראקציה:</h6>
              
              <!-- Reflection Questions -->
              <div class="reflection-questions mb-3">
                <h6 class="text-secondary">${
                  day.content.interactiveElements.reflection.title
                }</h6>
                <ul class="list-unstyled">
                  ${day.content.interactiveElements.reflection.questions
                    .map((q) => `<li class="mb-2">• ${q}</li>`)
                    .join("")}
                </ul>
              </div>

              <!-- Meditation Exercise -->
              <div class="meditation-exercise">
                <h6 class="text-secondary">${
                  day.content.interactiveElements.meditation.title
                }</h6>
                <p>${
                  day.content.interactiveElements.meditation.instructions
                }</p>
                <button class="btn btn-outline-primary" 
                        onclick="startMeditation('${
                          day.content.interactiveElements.meditation.duration.split(
                            " "
                          )[0]
                        }')">
                  התחל מדיטציה (${
                    day.content.interactiveElements.meditation.duration
                  })
                </button>
              </div>
            </div>

            <!-- Personal Notes -->
            <div class="notes-section mt-4">
              <h6 class="fw-bold">הערות אישיות:</h6>
              <div class="form-group">
                <textarea class="form-control" rows="3" 
                          placeholder="הוסף את ההערות שלך כאן..."
                          onchange="saveNote(${
                            day.id
                          }, this.value)">${savedNotes}</textarea>
              </div>
            </div>

            <!-- Add Secrets Button before Navigation -->
            <div class="secrets-section text-center mb-4">
              <button class="btn btn-outline-secondary" 
                      onclick="showSecretContent(${day.id})">
                <i class="fas fa-key me-2"></i>
                תוכן סודי
              </button>
            </div>

            <!-- Navigation -->
            <div class="navigation-buttons mt-4 d-flex justify-content-between">
              ${
                day.id > 1
                  ? `<button class="btn btn-outline-primary" onclick="showDayDetails(${
                      day.id - 1
                    })">
                    ← היום הקודם
                   </button>`
                  : `<div></div>`
              }
              ${
                day.id < 7
                  ? `<button class="btn btn-outline-primary" onclick="showDayDetails(${
                      day.id + 1
                    })">
                    היום הבא →
                   </button>`
                  : `<div></div>`
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalContent);
  const modal = new bootstrap.Modal(document.getElementById("dayModal"));
  modal.show();
}

// Initialize when document is loaded
document.addEventListener("DOMContentLoaded", () => {
  createDayCards();

  // Add scroll animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("fade-in");
      }
    });
  });

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  // Add search input event listener
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => searchContent(e.target.value));
  }

  // Add quiz button event listener
  const quizButton = document.getElementById("startQuiz");
  if (quizButton) {
    quizButton.addEventListener("click", startQuiz);
  }

  // Add global modal cleanup
  document.addEventListener("hidden.bs.modal", function (event) {
    const modal = event.target;
    if (modal.classList.contains("modal")) {
      modal.remove();
    }
  });
});

// Search functionality
function searchContent(query) {
  if (!query) {
    document.querySelectorAll(".col-md-4").forEach((card) => {
      card.style.display = "block";
    });
    return;
  }

  const searchQuery = query.toLowerCase();
  const cards = document.querySelectorAll(".col-md-4");

  cards.forEach((card) => {
    const cardContent = card.textContent.toLowerCase();
    card.style.display = cardContent.includes(searchQuery) ? "block" : "none";
  });
}

// Quiz functionality
const quizQuestions = [
  {
    day: 1,
    question: "מה נברא ביום הראשון?",
    options: ["שמש וירח", "אור", "חיות", "צמחים"],
    correct: 1,
  },
  {
    day: 2,
    question: "מה מבדיל הרקיע?",
    options: [
      "בין אור לחושך",
      "בין מים למים",
      "בין שמים לארץ",
      "בין יום ללילה",
    ],
    correct: 1,
  },
  {
    day: 3,
    question: "מה נברא ראשון ביום השלישי?",
    options: ["עצים", "דשא", "היבשה", "פרחים"],
    correct: 2,
  },
  {
    day: 3,
    question: "איזה סוג צמחים נזכר במפורש?",
    options: ["עץ פרי", "דשא", "שניהם", "אף אחד מהם"],
    correct: 2,
  },
  {
    day: 4,
    question: "מה תפקיד המאורות?",
    options: [
      "להאיר בלבד",
      "לסמן מועדים",
      "להבדיל בין יום ללילה",
      "כל התשובות נכונות",
    ],
    correct: 3,
  },
  {
    day: 5,
    question: "מה נברא קודם?",
    options: ["דגים", "עופות", "נבראו יחד", "לא מצוין"],
    correct: 2,
  },
  {
    day: 6,
    question: "מה מייחד את בריאת האדם?",
    options: [
      "נברא אחרון",
      "נברא בצלם",
      "קיבל שליטה על החיות",
      "כל התשובות נכונות",
    ],
    correct: 3,
  },
  {
    day: 7,
    question: "מה מיוחד ביום השביעי?",
    options: [
      "לא נבראו בו דברים חדשים",
      "הוא התקדש",
      "הוא התברך",
      "כל התשובות נכונות",
    ],
    correct: 3,
  },
];

// Add high scores functionality
const HIGH_SCORES_KEY = "breshitQuizHighScores";

function saveScore(score) {
  const highScores = getHighScores();
  const date = new Date().toLocaleDateString("he-IL");

  highScores.push({ score, date });
  highScores.sort((a, b) => b.score - a.score);

  // Keep only top 5 scores
  if (highScores.length > 5) {
    highScores.length = 5;
  }

  localStorage.setItem(HIGH_SCORES_KEY, JSON.stringify(highScores));
  return highScores;
}

function getHighScores() {
  const scores = localStorage.getItem(HIGH_SCORES_KEY);
  return scores ? JSON.parse(scores) : [];
}

function startQuiz() {
  let currentQuestion = 0;
  let score = 0;

  function showQuestion() {
    const question = quizQuestions[currentQuestion];

    // Close any open modals first
    closeAllModals();

    const modalContent = `
      <div class="modal fade" id="quizModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">שאלה ${currentQuestion + 1} מתוך ${
      quizQuestions.length
    }</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <p class="question mb-4">${question.question}</p>
              <div class="options">
                ${question.options
                  .map(
                    (option, index) => `
                  <button class="btn btn-outline-primary w-100 mb-2"
                          onclick="checkAnswer(${index})">${option}</button>
                `
                  )
                  .join("")}
              </div>
            </div>
            <div class="modal-footer">
              <div class="score">ניקוד: ${score}</div>
            </div>
          </div>
        </div>
      </div>
    `;

    // Remove existing modal if any
    const existingModal = document.getElementById("quizModal");
    if (existingModal) {
      existingModal.remove();
    }

    document.body.insertAdjacentHTML("beforeend", modalContent);
    const modal = new bootstrap.Modal(document.getElementById("quizModal"));
    modal.show();
  }

  window.checkAnswer = function (selectedIndex) {
    const question = quizQuestions[currentQuestion];
    const isCorrect = selectedIndex === question.correct;

    if (isCorrect) {
      score += 10;
      showFeedback("נכון!", "success");
    } else {
      showFeedback(
        `לא נכון. התשובה הנכונה היא: ${question.options[question.correct]}`,
        "danger"
      );
    }

    setTimeout(() => {
      closeAllModals(); // Close current modal
      currentQuestion++;
      if (currentQuestion < quizQuestions.length) {
        showQuestion();
      } else {
        showFinalScore();
      }
    }, 1500);
  };

  function showFeedback(message, type) {
    const feedbackDiv = document.createElement("div");
    feedbackDiv.className = `alert alert-${type} position-fixed top-50 start-50 translate-middle`;
    feedbackDiv.textContent = message;
    document.body.appendChild(feedbackDiv);

    setTimeout(() => {
      feedbackDiv.remove();
    }, 1500);
  }

  function showFinalScore() {
    // Close any open modals first
    closeAllModals();

    const highScores = saveScore(score);
    const scoresList = highScores
      .map(
        (s, i) =>
          `<li class="list-group-item d-flex justify-content-between align-items-center">
             <span>#${i + 1}</span>
             <span>${s.score} נקודות</span>
             <small class="text-muted">${s.date}</small>
           </li>`
      )
      .join("");

    const modalContent = `
      <div class="modal fade" id="scoreModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">סיום החידון</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body text-center">
              <h3>הניקוד הסופי שלך: ${score}</h3>
              <p>מתוך ${quizQuestions.length * 10} נקודות אפשריות</p>
              
              <div class="high-scores mt-4">
                <h5>שיאים אחרונים:</h5>
                <ul class="list-group">
                  ${scoresList}
                </ul>
              </div>
              
              <div class="mt-4">
                <button class="btn btn-primary me-2" onclick="startQuiz()">
                  נסה שוב
                </button>
                <button class="btn btn-outline-primary" onclick="shareScore(${score})">
                  שתף תוצאה
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalContent);
    const modal = new bootstrap.Modal(document.getElementById("scoreModal"));
    modal.show();
  }

  showQuestion();
}

// Add share functionality
function shareScore(score) {
  const text = `השגתי ${score} נקודות בחידון מעשה בראשית! בואו לנסות גם:`;
  const url = window.location.href;

  if (navigator.share) {
    navigator.share({
      title: "חידון מעשה בראשית",
      text: text,
      url: url,
    });
  } else {
    // Fallback for browsers that don't support Web Share API
    const shareText = `${text}\n${url}`;
    navigator.clipboard.writeText(shareText).then(() => {
      showFeedback("הטקסט הועתק ללוח!", "success");
    });
  }
}

// Add daily tasks to learning content
const learningContent = {
  meditation: {
    title: "מדיטציה יומית",
    description: "התבוננות יומית על משמעות הבריאה",
    exercises: [
      {
        title: "התבוננות באור",
        content: "עצום עיניים וחשוב על משמעות האור בחייך. איפה אתה מוצא אור?",
        duration: "2 דקות",
      },
      {
        title: "גבולות והבדלה",
        content:
          "חשוב על המשמעות של גבולות בחיים, כמו הרקיע המבדיל בין מים למים",
        duration: "3 דקות",
      },
    ],
  },
  insights: {
    title: "תובנות יומיות",
    items: creationDays.map((day) => ({
      title: day.title,
      insights: day.content.insights,
      reflection: "איך התובנות האלו משתקפות בחיים שלך?",
    })),
  },
  dailyTasks: {
    title: "משימות יומיות",
    description: "משימות להעמקת החיבור עם מעשה בראשית",
    tasks: [
      {
        day: 1,
        title: "חיפוש האור",
        description: "מצא שלושה מקרים היום בהם ראית 'אור' - פיזי או רוחני",
        type: "observation",
        duration: "במהלך היום",
      },
      {
        day: 2,
        title: "הבדלה והפרדה",
        description: "זהה גבולות חשובים בחייך וחשוב על משמעותם",
        type: "reflection",
        duration: "15 דקות",
      },
      {
        day: 3,
        title: "צמיחה אישית",
        description: "שתול משהו או טפל בצמח, והתבונן בתהליך הצמיחה",
        type: "action",
        duration: "20 דקות",
      },
      {
        day: 4,
        title: "סדר וזמן",
        description: "תכנן את סדר היום שלך בהשראת המאורות המסדרים את הזמן",
        type: "planning",
        duration: "10 דקות",
      },
      {
        day: 5,
        title: "תנועה וחיים",
        description: "צא לטבע וצפה בבעלי חיים בסביבתך",
        type: "observation",
        duration: "30 דקות",
      },
      {
        day: 6,
        title: "אחריות ושליטה",
        description: "בחר תחום בחייך בו תיקח היום אחריות גדולה יותר",
        type: "action",
        duration: "במהלך היום",
      },
      {
        day: 7,
        title: "מנוחה והתחדשות",
        description: "הקדש זמן למנוחה מודעת ולהתבוננות על השבוע שעבר",
        type: "reflection",
        duration: "25 דקות",
      },
    ],
  },
};

// Add meditation timer functionality
function startMeditation(duration) {
  closeAllModals();

  const minutes = parseInt(duration);
  const milliseconds = minutes * 60 * 1000;

  const modalContent = `
    <div class="modal fade" id="meditationModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">מדיטציה</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body text-center">
            <div class="timer-display mb-4">
              <span class="minutes">0${minutes}</span>:<span class="seconds">00</span>
            </div>
            <div class="timer-bar" style="animation-duration: ${milliseconds}ms"></div>
            <div class="meditation-controls mt-4">
              <button class="btn btn-primary pause-btn">השהה</button>
              <button class="btn btn-outline-primary" data-bs-dismiss="modal">סיים</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalContent);
  const modal = new bootstrap.Modal(document.getElementById("meditationModal"));
  modal.show();

  let timeLeft = minutes * 60;
  let isPaused = false;

  const timerInterval = setInterval(() => {
    if (!isPaused) {
      timeLeft--;
      const minutesLeft = Math.floor(timeLeft / 60);
      const secondsLeft = timeLeft % 60;

      document.querySelector(".minutes").textContent = minutesLeft
        .toString()
        .padStart(2, "0");
      document.querySelector(".seconds").textContent = secondsLeft
        .toString()
        .padStart(2, "0");

      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        showFeedback("המדיטציה הסתיימה", "success");
        setTimeout(() => modal.hide(), 1500);
      }
    }
  }, 1000);

  const pauseBtn = document.querySelector(".pause-btn");
  pauseBtn.addEventListener("click", () => {
    isPaused = !isPaused;
    pauseBtn.textContent = isPaused ? "המשך" : "השהה";

    const timerBar = document.querySelector(".timer-bar");
    timerBar.style.animationPlayState = isPaused ? "paused" : "running";
  });

  document
    .getElementById("meditationModal")
    .addEventListener("hidden.bs.modal", () => {
      clearInterval(timerInterval);
      if (timeLeft <= 0) {
        const meditationCount =
          parseInt(localStorage.getItem("meditationCount") || "0") + 1;
        localStorage.setItem("meditationCount", meditationCount);

        if (meditationCount === 1) {
          unlockAchievement("med_beginner");
        } else if (meditationCount === 5) {
          unlockAchievement("med_regular");
        }
      }
    });
}

// Update meditation exercise cards to include start button
function createExerciseCard(exercise) {
  return `
    <div class="exercise-card mb-3">
      <h6>${exercise.title}</h6>
      <p>${exercise.content}</p>
      <div class="d-flex justify-content-between align-items-center">
        <small class="text-muted">משך מומלץ: ${exercise.duration}</small>
        <button class="btn btn-sm btn-primary" 
                onclick="startMeditation('${exercise.duration.split(" ")[0]}')">
          התחל מדיטציה
        </button>
      </div>
    </div>
  `;
}

// Update showLearningSection to use the new exercise card
function showLearningSection() {
  closeAllModals();

  const modalContent = `
    <div class="modal fade" id="learningModal" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">מרחב למידה</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <div class="learning-tabs">
              <ul class="nav nav-tabs" role="tablist">
                <li class="nav-item">
                  <button class="nav-link active" data-bs-toggle="tab" data-bs-target="#meditation">
                    מדיטציה
                  </button>
                </li>
                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#insights">
                    תובנות
                  </button>
                </li>
                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#tasks">
                    משימות
                  </button>
                </li>
                <li class="nav-item">
                  <button class="nav-link" data-bs-toggle="tab" data-bs-target="#achievements">
                    הישגים
                  </button>
                </li>
              </ul>
              
              <div class="tab-content mt-3">
                <div class="tab-pane fade show active" id="meditation">
                  <h4>${learningContent.meditation.title}</h4>
                  <p>${learningContent.meditation.description}</p>
                  <div class="exercises mt-4">
                    ${learningContent.meditation.exercises
                      .map((ex) => createExerciseCard(ex))
                      .join("")}
                  </div>
                </div>
                
                <div class="tab-pane fade" id="insights">
                  <div class="insights-list">
                    ${learningContent.insights.items
                      .map(
                        (item) => `
                      <div class="insight-card mb-4">
                        <h5>${item.title}</h5>
                        <ul class="list-unstyled">
                          ${item.insights
                            .map(
                              (insight) => `
                            <li class="mb-2">
                              <strong>• ${insight.title}:</strong> 
                              ${insight.content}
                            </li>
                          `
                            )
                            .join("")}
                        </ul>
                        <p class="reflection-prompt mt-3">
                          ${item.reflection}
                        </p>
                      </div>
                    `
                      )
                      .join("")}
                  </div>
                </div>
                
                <div class="tab-pane fade" id="tasks">
                  <h4>${learningContent.dailyTasks.title}</h4>
                  <p>${learningContent.dailyTasks.description}</p>
                  
                  <div class="progress mb-4">
                    <div class="progress-bar task-progress-bar" role="progressbar" 
                         style="width: 0%" aria-valuenow="0" aria-valuemin="0" 
                         aria-valuemax="100"></div>
                  </div>
                  
                  <div class="tasks-list">
                    ${learningContent.dailyTasks.tasks
                      .map(
                        (task, index) => `
                      <div class="task-card mb-3 ${
                        getCompletedTasks()[`${task.day}-${index}`]
                          ? "completed"
                          : ""
                      }">
                        <div class="d-flex align-items-start">
                          <div class="task-checkbox me-3">
                            <input type="checkbox" class="form-check-input" 
                                   id="task-${task.day}-${index}"
                                   ${
                                     getCompletedTasks()[`${task.day}-${index}`]
                                       ? "checked"
                                       : ""
                                   }
                                   onchange="toggleTask(${task.day}, ${index})">
                          </div>
                          <div class="task-content">
                            <h6 class="mb-1">${task.title}</h6>
                            <p class="mb-2">${task.description}</p>
                            <div class="task-meta">
                              <span class="badge bg-primary me-2">${
                                task.type
                              }</span>
                              <small class="text-muted">${task.duration}</small>
                            </div>
                          </div>
                        </div>
                      </div>
                    `
                      )
                      .join("")}
                  </div>
                </div>
                
                <div class="tab-pane fade" id="achievements">
                  <h4>הישגים</h4>
                  <p>התקדמות והישגים בלימוד מעשה בראשית</p>
                  
                  <div class="achievements-grid">
                    ${Object.entries(achievements)
                      .map(
                        ([category, categoryAchievements]) => `
                      <div class="category-section mb-4">
                        <h5 class="mb-3">${getCategoryTitle(category)}</h5>
                        <div class="achievements-list">
                          ${categoryAchievements
                            .map(
                              (achievement) => `
                            <div class="achievement-badge ${
                              getAchievements().includes(achievement.id)
                                ? "unlocked"
                                : "locked"
                            }">
                              <div class="icon">${achievement.icon}</div>
                              <h6>${achievement.title}</h6>
                              <p class="small">${achievement.description}</p>
                            </div>
                          `
                            )
                            .join("")}
                        </div>
                      </div>
                    `
                      )
                      .join("")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", modalContent);
  const modal = new bootstrap.Modal(document.getElementById("learningModal"));
  modal.show();

  // Initialize task progress after modal is shown
  updateTaskProgress();
}

function getCategoryTitle(category) {
  const titles = {
    meditation: "מדיטציה",
    tasks: "משימות",
    insights: "תובנות",
  };
  return titles[category] || category;
}

// Add personal notes functionality
const NOTES_KEY = "breshitNotes";

function saveNote(dayId, note) {
  const notes = getNotes();
  notes[dayId] = note;
  localStorage.setItem(NOTES_KEY, JSON.stringify(notes));

  const allDaysHaveNotes = creationDays.every((day) => notes[day.id]?.trim());
  if (allDaysHaveNotes) {
    unlockAchievement("insights_notes");
  }
}

function getNotes() {
  const notes = localStorage.getItem(NOTES_KEY);
  return notes ? JSON.parse(notes) : {};
}

// Add task tracking functionality
const TASKS_KEY = "breshitTasks";

function getCompletedTasks() {
  const tasks = localStorage.getItem(TASKS_KEY);
  return tasks ? JSON.parse(tasks) : {};
}

function toggleTask(dayId, taskIndex) {
  const tasks = getCompletedTasks();
  const taskKey = `${dayId}-${taskIndex}`;

  tasks[taskKey] = !tasks[taskKey];
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));

  // Update UI
  const checkbox = document.querySelector(`#task-${taskKey}`);
  if (checkbox) {
    checkbox.checked = tasks[taskKey];
  }

  updateTaskProgress();

  const allTasks = Object.values(tasks).every(Boolean);
  if (allTasks) {
    unlockAchievement("tasks_week");
  }
}

function updateTaskProgress() {
  const tasks = getCompletedTasks();
  const totalTasks = learningContent.dailyTasks.tasks.length;
  const completedTasks = Object.values(tasks).filter(Boolean).length;

  const progressBar = document.querySelector(".task-progress-bar");
  if (progressBar) {
    const percentage = (completedTasks / totalTasks) * 100;
    progressBar.style.width = `${percentage}%`;
    progressBar.setAttribute("aria-valuenow", percentage);
  }
}

// Add achievements system
const ACHIEVEMENTS_KEY = "breshitAchievements";

const achievements = {
  meditation: [
    {
      id: "med_beginner",
      title: "מתחיל להתבונן",
      description: "השלמת את המדיטציה הראשונה שלך",
      icon: "🌱",
    },
    {
      id: "med_regular",
      title: "מתמיד",
      description: "השלמת 5 מדיטציות",
      icon: "🌿",
    },
  ],
  tasks: [
    {
      id: "tasks_first",
      title: "צעד ראשון",
      description: "השלמת משימה ראשונה",
      icon: "👣",
    },
    {
      id: "tasks_week",
      title: "שבוע מושלם",
      description: "השלמת את כל משימות השבוע",
      icon: "🌟",
    },
  ],
  insights: [
    {
      id: "insights_notes",
      title: "מעמיק",
      description: "כתבת הערות אישיות לכל הימים",
      icon: "📝",
    },
  ],
};

function getAchievements() {
  const saved = localStorage.getItem(ACHIEVEMENTS_KEY);
  return saved ? JSON.parse(saved) : [];
}

function unlockAchievement(achievementId) {
  const userAchievements = getAchievements();
  if (!userAchievements.includes(achievementId)) {
    userAchievements.push(achievementId);
    localStorage.setItem(ACHIEVEMENTS_KEY, JSON.stringify(userAchievements));
    showAchievementNotification(achievementId);
  }
}

function showAchievementNotification(achievementId) {
  const achievement = Object.values(achievements)
    .flat()
    .find((a) => a.id === achievementId);

  if (!achievement) return;

  const notification = `
    <div class="achievement-notification">
      <div class="achievement-icon">${achievement.icon}</div>
      <div class="achievement-content">
        <h6>${achievement.title}</h6>
        <p>${achievement.description}</p>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", notification);
  const notificationEl = document.querySelector(".achievement-notification");

  // Trigger animation
  setTimeout(() => notificationEl.classList.add("show"), 100);

  // Remove after animation
  setTimeout(() => {
    notificationEl.classList.remove("show");
    setTimeout(() => notificationEl.remove(), 300);
  }, 3000);
}

// Update showSecretContent function
function showSecretContent(dayId) {
  closeAllModals();

  setTimeout(() => {
    const content = secretContent[dayId];
    if (!content) {
      console.error("No secret content found for day:", dayId);
      return;
    }

    const modalContent = `
      <div class="modal fade secret-modal" id="secretModal" tabindex="-1">
        <div class="modal-dialog modal-lg modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <div class="modal-title-wrapper">
                <h5 class="modal-title">${content.title}</h5>
                <span class="secret-subtitle">סודות ורמזים נסתרים</span>
              </div>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              <!-- Introduction Section -->
              <div class="secret-intro mb-4">
                <div class="secret-icon">✨</div>
                <p class="secret-description">
                  גלה את הרבדים העמוקים והמשמעויות הנסתרות של יום זה בבריאה
                </p>
              </div>

              <div class="accordion custom-accordion" id="secretAccordion">
                <!-- Kabbalistic Section -->
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#kabbalahCollapse">
                      <i class="fas fa-tree me-2"></i>
                      ${content.kabbalistic.title}
                    </button>
                  </h2>
                  <div id="kabbalahCollapse" class="accordion-collapse collapse show" 
                       data-bs-parent="#secretAccordion">
                    <div class="accordion-body">
                      <div class="secret-content">
                        ${content.kabbalistic.content}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Numerical Section -->
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#numericalCollapse">
                      <i class="fas fa-calculator me-2"></i>
                      ${content.numerical.title}
                    </button>
                  </h2>
                  <div id="numericalCollapse" class="accordion-collapse collapse" 
                       data-bs-parent="#secretAccordion">
                    <div class="accordion-body">
                      <div class="secret-content">
                        ${content.numerical.content}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Mystical Section -->
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#mysticalCollapse">
                      <i class="fas fa-star me-2"></i>
                      ${content.mystical.title}
                    </button>
                  </h2>
                  <div id="mysticalCollapse" class="accordion-collapse collapse" 
                       data-bs-parent="#secretAccordion">
                    <div class="accordion-body">
                      <div class="secret-content">
                        ${content.mystical.content}
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Meditation Section -->
                <div class="accordion-item meditation-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" 
                            data-bs-toggle="collapse" data-bs-target="#meditationCollapse">
                      <i class="fas fa-om me-2"></i>
                      ${content.meditation.title}
                    </button>
                  </h2>
                  <div id="meditationCollapse" class="accordion-collapse collapse" 
                       data-bs-parent="#secretAccordion">
                    <div class="accordion-body">
                      <div class="meditation-content">
                        <div class="meditation-instructions">
                          ${content.meditation.instructions}
                        </div>
                        <div class="meditation-timer">
                          <div class="timer-display mb-3">
                            <i class="far fa-clock"></i>
                            <span>${content.meditation.duration}</span>
                          </div>
                          <button class="btn btn-meditation" 
                                  onclick="startMeditation('${
                                    content.meditation.duration.split(" ")[0]
                                  }')">
                            <i class="fas fa-play me-2"></i>
                            התחל מדיטציה
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML("beforeend", modalContent);
    const modal = new bootstrap.Modal(document.getElementById("secretModal"));
    modal.show();
  }, 300);
}
