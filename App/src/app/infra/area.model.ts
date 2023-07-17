// 暫定でアドホックに実装する

export type Province = {
  id: string;
  name: string;
};

export type Prefecture = {
  id: string;
  name: string;
  provinceId: string;
};

type City = {
  id: string;
  name: string;
  prefectureId: string;
};

export const provinces: Province[] = [
  { id: '1', name: '北海道' },
  { id: '2', name: '東北' },
  { id: '3', name: '関東' },
  { id: '4', name: '中部' },
  { id: '5', name: '近畿' },
  { id: '6', name: '中国' },
  { id: '7', name: '四国' },
  { id: '8', name: '九州' },
  { id: '9', name: '沖縄' },
];

export const prefectures: Prefecture[] = [
  { id: '1', name: '北海道', provinceId: '1' },
  { id: '2', name: '青森県', provinceId: '2' },
  { id: '3', name: '岩手県', provinceId: '2' },
  { id: '4', name: '宮城県', provinceId: '2' },
  { id: '5', name: '秋田県', provinceId: '2' },
  { id: '6', name: '山形県', provinceId: '2' },
  { id: '7', name: '福島県', provinceId: '2' },
  { id: '8', name: '茨城県', provinceId: '3' },
  { id: '9', name: '栃木県', provinceId: '3' },
  { id: '10', name: '群馬県', provinceId: '3' },
  { id: '11', name: '埼玉県', provinceId: '3' },
  { id: '12', name: '千葉県', provinceId: '3' },
  { id: '13', name: '東京都', provinceId: '3' },
  { id: '14', name: '神奈川県', provinceId: '3' },
  { id: '15', name: '新潟県', provinceId: '4' },
  { id: '16', name: '富山県', provinceId: '4' },
  { id: '17', name: '石川県', provinceId: '4' },
  { id: '18', name: '福井県', provinceId: '4' },
  { id: '19', name: '山梨県', provinceId: '4' },
  { id: '20', name: '長野県', provinceId: '4' },
  { id: '21', name: '岐阜県', provinceId: '4' },
  { id: '22', name: '静岡県', provinceId: '4' },
  { id: '23', name: '愛知県', provinceId: '4' },
  { id: '24', name: '三重県', provinceId: '4' },
  { id: '25', name: '滋賀県', provinceId: '5' },
  { id: '26', name: '京都府', provinceId: '5' },
  { id: '27', name: '大阪府', provinceId: '5' },
  { id: '28', name: '兵庫県', provinceId: '5' },
  { id: '29', name: '奈良県', provinceId: '5' },
  { id: '30', name: '和歌山県', provinceId: '5' },
  { id: '31', name: '鳥取県', provinceId: '6' },
  { id: '32', name: '島根県', provinceId: '6' },
  { id: '33', name: '岡山県', provinceId: '6' },
  { id: '34', name: '広島県', provinceId: '6' },
  { id: '35', name: '山口県', provinceId: '6' },
  { id: '36', name: '徳島県', provinceId: '7' },
  { id: '37', name: '香川県', provinceId: '7' },
  { id: '38', name: '愛媛県', provinceId: '7' },
  { id: '39', name: '高知県', provinceId: '7' },
  { id: '40', name: '福岡県', provinceId: '8' },
  { id: '41', name: '佐賀県', provinceId: '8' },
  { id: '42', name: '長崎県', provinceId: '8' },
  { id: '43', name: '熊本県', provinceId: '8' },
  { id: '44', name: '大分県', provinceId: '8' },
  { id: '45', name: '宮崎県', provinceId: '8' },
  { id: '46', name: '鹿児島県', provinceId: '8' },
  { id: '47', name: '沖縄県', provinceId: '9' },
];

export const cities: City[] = [
  { id: '1', name: '札幌市', prefectureId: '1' },
  { id: '2', name: '函館市', prefectureId: '1' },
  { id: '3', name: '小樽市', prefectureId: '1' },
  { id: '4', name: '旭川市', prefectureId: '1' },
  { id: '5', name: '室蘭市', prefectureId: '1' },
  { id: '6', name: '釧路市', prefectureId: '1' },
  { id: '7', name: '帯広市', prefectureId: '1' },
  { id: '8', name: '北見市', prefectureId: '1' },
  { id: '9', name: '夕張市', prefectureId: '1' },
  { id: '10', name: '岩見沢市', prefectureId: '1' },
  { id: '11', name: '網走市', prefectureId: '1' },
  { id: '12', name: '留萌市', prefectureId: '1' },
  { id: '13', name: '苫小牧市', prefectureId: '1' },
  { id: '14', name: '稚内市', prefectureId: '1' },
  { id: '15', name: '美唄市', prefectureId: '1' },
  { id: '16', name: '芦別市', prefectureId: '1' },
  { id: '17', name: '江別市', prefectureId: '1' },
  { id: '18', name: '赤平市', prefectureId: '1' },
  { id: '19', name: '紋別市', prefectureId: '1' },
  { id: '20', name: '士別市', prefectureId: '1' },
  { id: '21', name: '名寄市', prefectureId: '1' },
  { id: '22', name: '三笠市', prefectureId: '1' },
  { id: '23', name: '根室市', prefectureId: '1' },
  { id: '24', name: '千歳市', prefectureId: '1' },
  { id: '25', name: '滝川市', prefectureId: '1' },
  { id: '26', name: '砂川市', prefectureId: '1' },
  { id: '27', name: '歌志内市', prefectureId: '1' },
  { id: '28', name: '深川市', prefectureId: '1' },
  { id: '29', name: '富良野市', prefectureId: '1' },
  { id: '30', name: '登別市', prefectureId: '1' },
  { id: '31', name: '恵庭市', prefectureId: '1' },
  { id: '32', name: '伊達市', prefectureId: '1' },
  { id: '33', name: '北広島市', prefectureId: '1' },
  { id: '34', name: '石狩市', prefectureId: '1' },
  { id: '35', name: '北斗市', prefectureId: '1' },
  { id: '36', name: '石狩郡', prefectureId: '1' },
  { id: '37', name: '松前郡', prefectureId: '1' },
  { id: '38', name: '上磯郡', prefectureId: '1' },
  { id: '39', name: '青森市', prefectureId: '2' },
  { id: '40', name: '弘前市', prefectureId: '2' },
  { id: '41', name: '八戸市', prefectureId: '2' },
  { id: '42', name: '黒石市', prefectureId: '2' },
  { id: '43', name: '五所川原市', prefectureId: '2' },
  { id: '44', name: '十和田市', prefectureId: '2' },
  { id: '45', name: '三沢市', prefectureId: '2' },
  { id: '46', name: 'むつ市', prefectureId: '2' },
  { id: '47', name: 'つがる市', prefectureId: '2' },
  { id: '48', name: '平川市', prefectureId: '2' },
  { id: '49', name: '東津軽郡', prefectureId: '2' },
  { id: '50', name: '西津軽郡', prefectureId: '2' },
  { id: '51', name: '中津軽郡', prefectureId: '2' },
  { id: '52', name: '南津軽郡', prefectureId: '2' },
  { id: '53', name: '北津軽郡', prefectureId: '2' },
  { id: '54', name: '上北郡', prefectureId: '2' },
  { id: '55', name: '下北郡', prefectureId: '2' },
  { id: '56', name: '秋田市', prefectureId: '5' },
  { id: '57', name: '能代市', prefectureId: '5' },
  { id: '58', name: '横手市', prefectureId: '5' },
  { id: '59', name: '大館市', prefectureId: '5' },
  { id: '60', name: '男鹿市', prefectureId: '5' },
  { id: '61', name: '湯沢市', prefectureId: '5' },
  { id: '62', name: '鹿角市', prefectureId: '5' },
  { id: '63', name: '由利本荘市', prefectureId: '5' },
  { id: '64', name: '潟上市', prefectureId: '5' },
  { id: '65', name: '大仙市', prefectureId: '5' },
  { id: '66', name: '北秋田市', prefectureId: '5' },
  { id: '67', name: 'にかほ市', prefectureId: '5' },
  { id: '68', name: '仙北市', prefectureId: '5' },
  { id: '69', name: '鹿角郡', prefectureId: '5' },
  { id: '70', name: '北秋田郡', prefectureId: '5' },
  { id: '71', name: '山形市', prefectureId: '6' },
  { id: '72', name: '米沢市', prefectureId: '6' },
  { id: '73', name: '鶴岡市', prefectureId: '6' },
  { id: '74', name: '酒田市', prefectureId: '6' },
  { id: '75', name: '新庄市', prefectureId: '6' },
  { id: '76', name: '寒河江市', prefectureId: '6' },
  { id: '77', name: '上山市', prefectureId: '6' },
  { id: '78', name: '村山市', prefectureId: '6' },
  { id: '79', name: '長井市', prefectureId: '6' },
  { id: '80', name: '天童市', prefectureId: '6' },
  { id: '81', name: '東根市', prefectureId: '6' },
  { id: '82', name: '尾花沢市', prefectureId: '6' },
  { id: '83', name: '南陽市', prefectureId: '6' },
  { id: '84', name: '東村山郡', prefectureId: '6' },
  { id: '85', name: '西村山郡', prefectureId: '6' },
  { id: '86', name: '北村山郡', prefectureId: '6' },
  { id: '87', name: '最上郡', prefectureId: '6' },
  { id: '88', name: '東置賜郡', prefectureId: '6' },
  { id: '89', name: '西置賜郡', prefectureId: '6' },
  { id: '90', name: '東田川郡', prefectureId: '6' },
  { id: '91', name: '飽海郡', prefectureId: '6' },
  { id: '92', name: '石川郡', prefectureId: '6' },
  { id: '93', name: '岩手市', prefectureId: '3' },
  { id: '94', name: '盛岡市', prefectureId: '3' },
  { id: '95', name: '宮古市', prefectureId: '3' },
  { id: '96', name: '大船渡市', prefectureId: '3' },
  { id: '97', name: '花巻市', prefectureId: '3' },
  { id: '98', name: '北上市', prefectureId: '3' },
  { id: '99', name: '久慈市', prefectureId: '3' },
  { id: '100', name: '遠野市', prefectureId: '3' },
  { id: '101', name: '一関市', prefectureId: '3' },
  { id: '102', name: '陸前高田市', prefectureId: '3' },
  { id: '103', name: '釜石市', prefectureId: '3' },
  { id: '104', name: '二戸市', prefectureId: '3' },
  { id: '105', name: '八幡平市', prefectureId: '3' },
  { id: '106', name: '奥州市', prefectureId: '3' },
  { id: '107', name: '滝沢市', prefectureId: '3' },
  { id: '108', name: '岩手郡', prefectureId: '3' },
  { id: '109', name: '紫波郡', prefectureId: '3' },
  { id: '110', name: '和賀郡', prefectureId: '3' },
  { id: '111', name: '胆沢郡', prefectureId: '3' },
  { id: '112', name: '西磐井郡', prefectureId: '3' },
  { id: '113', name: '気仙郡', prefectureId: '3' },
  { id: '114', name: '上閉伊郡', prefectureId: '3' },
  { id: '115', name: '下閉伊郡', prefectureId: '3' },
  { id: '116', name: '九戸郡', prefectureId: '3' },
  { id: '117', name: '二戸郡', prefectureId: '3' },
];
