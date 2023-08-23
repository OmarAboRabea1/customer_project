import { Chef, Dish, Restaurant } from "./Types";
import restaurantPic from "../assests/Claro_Res.svg";
import chefIMG from "../assests/yossi.svg";
import spicy from "../assests/spicy.svg"
import vegan from "../assests/vegan.svg";
import vegetarian from "../assests/vegetarian.svg";
import { PrepareSearchData } from "../Helpers/PrepareSearchData";
import { ArticleType } from './Types';

export interface SearchNames{
    name: string;
}





export const AllRestaurants: Array<Restaurant> = [
    
]

export const AllDishes: Array<Dish> = [
    {
        name:"Dish1",
        restaurant:"claro",
        describtion:"desc string",
        img:restaurantPic,
        price:60,
        ingredients:["salt", "something-else"],
        category: vegetarian,
        dishType: "breakfast",
    },
    {
        name:"Dish2",
        restaurant:"claro",
        describtion:"desc string",
        img:restaurantPic,
        price:60,
        ingredients:["salt", "something-else"],
        category: vegetarian,
        dishType: "launch",
    },
    {
        name:"Dish3",
        restaurant:"claro",
        describtion:"desc string",
        img:restaurantPic,
        price:60,
        ingredients:["salt", "something-else"],
        category: vegetarian,
        dishType: "dinner",
    },
    {
        name:"Dish4",
        restaurant:"claro",
        describtion:"desc string",
        img:restaurantPic,
        price:60,
        ingredients:["salt", "something-else"],
        category: vegetarian,
        dishType: "breakfast",
    },
    {
        name:"Dish5",
        restaurant:"claro",
        describtion:"desc string",
        img:restaurantPic,
        price:60,
        ingredients:["salt", "something-else"],
        category: vegetarian,
        dishType: "breakfast",
    },
    {
        name:"Dish6",
        restaurant:"claro",
        describtion:"desc string",
        img:restaurantPic,
        price:60,
        ingredients:["salt", "something-else"],
        category: vegetarian,
        dishType: "dinner",
    },
    {
        name:"Dish7",
        restaurant:"claro",
        describtion:"desc string",
        img:restaurantPic,
        price:60,
        ingredients:["salt", "something-else"],
        category: vegetarian,
        dishType: "launch",
    },

]
export const AllChefs: Array<Chef> = [
    
]

export const Colors = {
    black: "#000",
    grey: "#979797",
    lightYellow: "#F9F4EA",
    yellow: "#E19D1A",
    lightGrey: "#FAFAFA"
}

export var search_names: string[]= []

search_names = PrepareSearchData(AllRestaurants, AllDishes, AllChefs)

const content_id_1 = ""

export const articles: ArticleType[] = [
  {
    id: 1,
    title: " لا عنف ولا دلال، الطريقة الانجح لتربية طفلك",
    content: `
            فهم مشاعر وانفعالات الطفل لا يعني الموافقة على رغباته عندما يكون غاضباً، أو إعطاؤه كل ما يريد. فهم الطفل يعني: "أنا أفهم أنك غاضب مني لأنني لا أريد أن أعطيك هذا الشيء" أو "أنا أفهم أنك غاضب من نفسك لأنك إذا لم تنجح في هذا فإنك تفقد أعصابك".

            <br/>  كثيرًا ما يخلط الآباء بين فهم الطفل ومحاولة تهدئته وبين التساهل مع الطفل وكسر القوانين. تهدئته لا تعني تدليله ولا تلبية طلباته ولا الانصياع له.

            وهذا الشعور بالأمان العاطفي هو الذي يمنح الثقة والأمان والأرضية الخصبة للتحكم في النفس والحياة المتوازنة. <br/> هذا الشعور هو القاعدة الأساسية له لكي يكبر طفلي ويبني هويته الشخصية ويكون مسؤولاً عن نفسه.

            وعلى العكس من ذلك فإن التربية عن طريق الخوف والتهديد والابتزاز وقلة الاحترام وتضخيم العواطف تفقده ثقته بنفسه وتسبب خللاً في بناء هويته. <br/>  إن منعه من التعبير عن مشاعره السلبية وشكوكه وقلقه وغضبه يؤدي إلى خلق جو من عدم التفاهم.

            جزء مهم من الطفل لا يُسمع عندما نرسله ليهدأ في غرفته، عندما ننكر مشاعره، عندما نسخر منه، عندما يكون كل ما يحصل عليه هو "هذا ليس خطيرًا" ، عندما نرفض البحث عن حاجته التي يرغب في التعبير عنها في سلوكه، عندما نفضل العزلة/العقاب على العناق.
                
    `
  },
  {
    id: 2,
    title: " اخطاء تؤدي الى كسر ثقة الطفل بوالديه",
    content: "ستتم اضافته قريبا"
  },
  {
    id: 3,
    title: " من الضحية في الطلاق، الرجل، المرأة ام الأولاد؟",
    content: "ستتم اضافته قريبا"
  },
  {
    id: 4,
    title: " أسباب تأخر الزواج في مجتماعاتنا، فقر الشباب أم طموح البنات؟ ",
    content: "ستتم اضافته قريبا"
  },
  {
    id: 5,
    title: "الولد الصايع، الامر يبدأ من المنزل وليس من الشارع",
    content: "ستتم اضافته قريبا"
  },
  {
    id: 6,
    title: "هل علاقة الإبنة بأبيها تعطيها الثقة وتقدير الذات؟",
    content: "ستتم اضافته قريبا"
  },
  {
    id: 7,
    title: "ما مفهوم الحرية للمراهق؟",
    content: "ستتم اضافته قريبا"
  },  
  {
    id: 8,
    title: "ابني لا يسمعني، طرق لكي تجعله يصغي",
    content: "ستتم اضافته قريبا"
  },  
  {
    id: 9,
    title: " التغلب على الاكتئاب",
    content: "ستتم اضافته قريبا"
  },
  {
    id: 10,
    title: " تنظيم الوقت",
    content: "ستتم اضافته قريبا"
  },

];