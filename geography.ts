/**
 * Static mappings for easily working with geographic countries and states.
 *
 * @example

  ```typescript

   getStateById(3) // returns { name: 'Arkansas', id: 3, abbrev: 'AR' }
   getStateById(-123) // returns undefined

  ```
 */

/**
 * dummy comment for typedoc
 */

interface State { id: number, name: string, abbrev: string }
interface Country { id: number, name: string, abbrev: string }


/**
 * Represents geographic states used in NetSuite. First one is blank to allow easy binding to a UI dropdown
 * Contains values for US States, Canadian Provinces, and similar for Australia, Japan, China,
 * Mexico and United Kingdom
 */
export const stateMapping : State[] = [{ name: '', id: 0, abbrev: '' },
   // United States and Canada
   { name: 'Alabama', id: 0, abbrev: 'AL' },
   { name: 'Alaska', id: 1, abbrev: 'AK' },
   { name: 'Alberta', id: 101, abbrev: 'AB' },
   { name: 'Arizona', id: 2, abbrev: 'AZ' },
   { name: 'Arkansas', id: 3, abbrev: 'AR' },
   { name: 'Armed Forces Americas', id: 53, abbrev: 'AA' },
   { name: 'Armed Forces Europe', id: 52, abbrev: 'AE' },
   { name: 'Armed Forces Pacific', id: 54, abbrev: 'AP' },
   { name: 'British Columbia', id: 102, abbrev: 'BC' },
   { name: 'California', id: 4, abbrev: 'CA' },
   { name: 'Colorado', id: 5, abbrev: 'CO' },
   { name: 'Connecticut', id: 6, abbrev: 'CT' },
   { name: 'Delaware', id: 7, abbrev: 'DE' },
   { name: 'District of Columbia', id: 8, abbrev: 'DC' },
   { name: 'Florida', id: 9, abbrev: 'FL' },
   { name: 'Georgia', id: 10, abbrev: 'GA' },
   { name: 'Hawaii', id: 11, abbrev: 'HI' },
   { name: 'Idaho', id: 12, abbrev: 'ID' },
   { name: 'Illinois', id: 13, abbrev: 'IL' },
   { name: 'Indiana', id: 14, abbrev: 'IN' },
   { name: 'Iowa', id: 15, abbrev: 'IA' },
   { name: 'Kansas', id: 16, abbrev: 'KS' },
   { name: 'Kentucky', id: 17, abbrev: 'KY' },
   { name: 'Louisiana', id: 18, abbrev: 'LA' },
   { name: 'Maine', id: 19, abbrev: 'ME' },
   { name: 'Manitoba', id: 103, abbrev: 'MB' },
   { name: 'Maryland', id: 20, abbrev: 'MD' },
   { name: 'Massachusetts', id: 21, abbrev: 'MA' },
   { name: 'Michigan', id: 22, abbrev: 'MI' },
   { name: 'Minnesota', id: 23, abbrev: 'MN' },
   { name: 'Mississippi', id: 24, abbrev: 'MS' },
   { name: 'Missouri', id: 25, abbrev: 'MO' },
   { name: 'Montana', id: 26, abbrev: 'MT' },
   { name: 'Nebraska', id: 27, abbrev: 'NE' },
   { name: 'Nevada', id: 28, abbrev: 'NV' },
   { name: 'Newfoundland', id: 105, abbrev: 'NL' },
   { name: 'New Brunswick', id: 104, abbrev: 'NB' },
   { name: 'New Hampshire', id: 29, abbrev: 'NH' },
   { name: 'New Jersey', id: 30, abbrev: 'NJ' },
   { name: 'New Mexico', id: 31, abbrev: 'NM' },
   { name: 'New York', id: 32, abbrev: 'NY' },
   { name: 'North Carolina', id: 33, abbrev: 'NC' },
   { name: 'North Dakota', id: 34, abbrev: 'ND' },
   { name: 'Northwest Territories', id: 107, abbrev: 'NT' },
   { name: 'Nova Scotia', id: 106, abbrev: 'NS' },
   { name: 'Nunavut', id: 108, abbrev: 'NU' },
   { name: 'Ohio', id: 35, abbrev: 'OH' },
   { name: 'Oklahoma', id: 36, abbrev: 'OK' },
   { name: 'Ontario', id: 109, abbrev: 'ON' },
   { name: 'Oregon', id: 37, abbrev: 'OR' },
   { name: 'Pennsylvania', id: 38, abbrev: 'PA' },
   { name: 'Prince Edward Island', id: 110, abbrev: 'PE' },
   { name: 'Puerto Rico', id: 39, abbrev: 'PR' },
   { name: 'Quebec', id: 111, abbrev: 'QC' },
   { name: 'Rhode Island', id: 40, abbrev: 'RI' },
   { name: 'Saskatchewan', id: 112, abbrev: 'SK' },
   { name: 'South Carolina', id: 41, abbrev: 'SC' },
   { name: 'South Dakota', id: 42, abbrev: 'SD' },
   { name: 'Tennessee', id: 43, abbrev: 'TN' },
   { name: 'Texas', id: 44, abbrev: 'TX' },
   { name: 'Utah', id: 45, abbrev: 'UT' },
   { name: 'Vermont', id: 46, abbrev: 'VT' },
   { name: 'Virginia', id: 47, abbrev: 'VA' },
   { name: 'Washington', id: 48, abbrev: 'WA' },
   { name: 'West Virginia', id: 49, abbrev: 'WV' },
   { name: 'Wisconsin', id: 50, abbrev: 'WI' },
   { name: 'Wyoming', id: 51, abbrev: 'WY' },
   { name: 'Yukon', id: 113, abbrev: 'YT' },
   // Australia
   { name: 'Australian Capital Territory', id: 400, abbrev: 'ACT' },
   { name: 'New South Wales', id: 401, abbrev: 'NSW' },
   { name: 'Northern Territory', id: 402, abbrev: 'NT' },
   { name: 'Queensland', id: 403, abbrev: 'QLD' },
   { name: 'South Australia', id: 404, abbrev: 'SA' },
   { name: 'Tasmania', id: 405, abbrev: 'TAS' },
   { name: 'Victoria', id: 406, abbrev: 'VIC' },
   { name: 'Western Australia', id: 407, abbrev: 'WA' },
   // Mexico
   { name: 'Aguascalientes', id: 500, abbrev: 'AGS' },
   { name: 'Baja California', id: 532, abbrev: 'BC' },
   { name: 'Baja California Norte', id: 501, abbrev: 'BCN' },  // (obsolete)
   { name: 'Baja California Sur', id: 502, abbrev: 'BCS' },
   { name: 'Campeche', id: 503, abbrev: 'CAM' },
   { name: 'Chihuahua', id: 504, abbrev: 'CHIH' },
   { name: 'Coahuila', id: 506, abbrev: 'COAH' },
   { name: 'Colima', id: 507, abbrev: 'COL' },
   { name: 'Distrito Federal', id: 508, abbrev: 'DF' },    // (obsolete)
   { name: 'Durango', id: 509, abbrev: 'DGO' },
   { name: 'Guanajuato', id: 510, abbrev: 'GTO' },
   { name: 'Guerrero', id: 511, abbrev: 'GRO' },
   { name: 'Hidalgo', id: 512, abbrev: 'HGO' },
   { name: 'Jalisco', id: 513, abbrev: 'JAL' },
   { name: 'Mexico City', id: 533, abbrev: 'CDMX' },
   { name: 'Michoacán', id: 515, abbrev: 'MICH' },
   { name: 'Morelos', id: 516, abbrev: 'MOR' },
   { name: 'México (Estado de)', id: 514, abbrev: 'MEX' },
   { name: 'Nayarit', id: 517, abbrev: 'NAY' },
   { name: 'Nuevo León', id: 518, abbrev: 'NL' },
   { name: 'Oaxaca', id: 519, abbrev: 'OAX' },
   { name: 'Puebla', id: 520, abbrev: 'PUE' },
   { name: 'Querétaro', id: 521, abbrev: 'QRO' },
   { name: 'Quintana Roo', id: 522, abbrev: 'QROO' },
   { name: 'San Luis Potosí', id: 523, abbrev: 'SLP' },
   { name: 'Sinaloa', id: 524, abbrev: 'SIN' },
   { name: 'Sonora', id: 525, abbrev: 'SON' },
   { name: 'Tabasco', id: 526, abbrev: 'TAB' },
   { name: 'Tamaulipas', id: 527, abbrev: 'TAMPS' },
   { name: 'Tlaxcala', id: 528, abbrev: 'TLAX' },
   { name: 'Veracruz', id: 529, abbrev: 'VER' },
   { name: 'Yucatán', id: 530, abbrev: 'YUC' },
   { name: 'Zacatecas', id: 531, abbrev: 'ZAC' },
   // China
   { name: 'Heilongjiang Province', id: 601, abbrev: '黑龙江省' },
   { name: 'Jilin Province', id: 602, abbrev: '吉林省' },
   { name: 'Liaoning Province', id: 603, abbrev: '辽宁省' },
   { name: 'Neimenggu A. R.', id: 604, abbrev: '内蒙古' },
   { name: 'Gansu Province', id: 605, abbrev: '甘肃省' },
   { name: 'Ningxia A. R.', id: 606, abbrev: '宁夏回族自治区' },
   { name: 'Xinjiang A. R.', id: 607, abbrev: '新疆维吾尔族自治区' },
   { name: 'Qinghai Province', id: 608, abbrev: '青海省' },
   { name: 'Hebei Province', id: 609, abbrev: '河北省' },
   { name: 'Henan Province', id: 610, abbrev: '河南省' },
   { name: 'Shandong Province', id: 611, abbrev: '山东省' },
   { name: 'Shanxi Province', id: 612, abbrev: '山西省' },
   { name: 'Shaanxi Province', id: 613, abbrev: '陕西省' },
   { name: 'Jiangsu Province', id: 614, abbrev: '江苏省' },
   { name: 'Zhejiang Province', id: 615, abbrev: '浙江省' },
   { name: 'Anhui Province', id: 616, abbrev: '安徽省' },
   { name: 'Hubei Province', id: 617, abbrev: '湖北省' },
   { name: 'Hunan Province', id: 618, abbrev: '湖南省' },
   { name: 'Sichuan Province', id: 619, abbrev: '四川省' },
   { name: 'Guizhou Province', id: 620, abbrev: '贵州省' },
   { name: 'Jiangxi Province', id: 621, abbrev: '江西省' },
   { name: 'Guangdong Province', id: 622, abbrev: '广东省' },
   { name: 'Guangxi A. R.', id: 623, abbrev: '广西壮族自治区' },
   { name: 'Yunnan Province', id: 624, abbrev: '云南省' },
   { name: 'Hainan Province', id: 625, abbrev: '海南省' },
   { name: 'Xizang A. R.', id: 626, abbrev: '西藏藏族自治区' },
   { name: 'Beijing', id: 627, abbrev: '北京市' },
   { name: 'Shanghai', id: 628, abbrev: '上海市' },
   { name: 'Tianjin', id: 629, abbrev: '天津市' },
   { name: 'Chongqing', id: 630, abbrev: '重庆市' },
   { name: 'Fujian Province', id: 631, abbrev: '福建省' },
   // United Kingdom
   { name: 'Aberdeenshire', id: 201, abbrev: 'Aberdeenshire' },
   { name: 'Angus', id: 202, abbrev: 'Angus' },
   { name: 'Argyll', id: 203, abbrev: 'Argyll' },
   { name: 'Avon', id: 204, abbrev: 'Avon' },
   { name: 'Ayrshire', id: 205, abbrev: 'Ayrshire' },
   { name: 'Banffshire', id: 206, abbrev: 'Banffshire' },
   { name: 'Bedfordshire', id: 207, abbrev: 'Beds.' },
   { name: 'Berkshire', id: 208, abbrev: 'Berks.' },
   { name: 'Berwickshire', id: 209, abbrev: 'Berwickshire' },
   { name: 'Buckinghamshire', id: 210, abbrev: 'Bucks.' },
   { name: 'Caithness', id: 211, abbrev: 'Caithness' },
   { name: 'Cambridgeshire', id: 212, abbrev: 'Cambs.' },
   { name: 'Cheshire', id: 213, abbrev: 'Ches.' },
   { name: 'Clackmannanshire', id: 214, abbrev: 'Clackmannanshire' },
   { name: 'Cleveland', id: 215, abbrev: 'Cleveland' },
   { name: 'Clwyd', id: 216, abbrev: 'Clwyd' },
   { name: 'Cornwall', id: 217, abbrev: 'Cornwall' },
   { name: 'County Antrim', id: 218, abbrev: 'Co Antrim' },
   { name: 'County Armagh', id: 219, abbrev: 'Cleveland' },
   { name: 'County Down', id: 220, abbrev: 'Co Down' },
   { name: 'County Durham', id: 231, abbrev: 'Durham' },
   { name: 'County Fermanagh', id: 221, abbrev: 'Co Fermanagh' },
   { name: 'County Londonderry', id: 222, abbrev: 'Co Londonderry' },
   { name: 'County Tyrone', id: 223, abbrev: 'Co Tyrone' },
   { name: 'Cumbria', id: 225, abbrev: 'Cumbria' },
   { name: 'Derbyshire', id: 226, abbrev: 'Derbys.' },
   { name: 'Devon', id: 227, abbrev: 'Devon' },
   { name: 'Dorset', id: 228, abbrev: 'Dorset' },
   { name: 'Dumfriesshire', id: 229, abbrev: 'Dumfriesshire' },
   { name: 'Dunbartonshire', id: 230, abbrev: 'Dunbartonshire' },
   { name: 'Dyfed', id: 232, abbrev: 'Dyfed' },
   { name: 'East Lothian', id: 234, abbrev: 'E Lothian' },
   { name: 'East Sussex', id: 233, abbrev: 'E Sussex' },
   { name: 'Essex', id: 235, abbrev: 'Essex' },
   { name: 'Fife', id: 236, abbrev: 'Fife' },
   { name: 'Gloucestershire', id: 237, abbrev: 'Gloucs.' },
   { name: 'Greater London', id: 238, abbrev: 'London' },
   { name: 'Gwent', id: 239, abbrev: 'Gwent' },
   { name: 'Gwynedd', id: 240, abbrev: 'Gwynedd' },
   { name: 'Hampshire', id: 241, abbrev: 'Hants.' },
   { name: 'Herefordshire', id: 242, abbrev: 'Hereford' },
   { name: 'Hertfordshire', id: 243, abbrev: 'Herts.' },
   { name: 'Inverness-shire', id: 245, abbrev: 'Inverness-shire' },
   { name: 'Isle of Arran', id: 246, abbrev: 'Isle of Arran' },
   { name: 'Isle of Barra', id: 247, abbrev: 'Isle of Barra' },
   { name: 'Isle of Benbecula', id: 248, abbrev: 'Isle of Benbecula' },
   { name: 'Isle of Bute', id: 249, abbrev: 'Isle of Bute' },
   { name: 'Isle of Canna', id: 250, abbrev: ' Isle of Canna' },
   { name: 'Isle of Coll', id: 251, abbrev: 'Isle of Coll' },
   { name: 'Isle of Colonsay', id: 252, abbrev: 'Isle of Colonsay' },
   { name: 'Isle of Cumbrae', id: 253, abbrev: 'Isle of Cumbrae' },
   { name: 'Isle of Eigg', id: 254, abbrev: 'Isle of Eigg' },
   { name: 'Isle of Gigha', id: 255, abbrev: 'Isle of Gigha' },
   { name: 'Isle of Harris', id: 256, abbrev: 'Isle of Harris' },
   { name: 'Isle of Iona', id: 258, abbrev: 'Isle of Iona' },
   { name: 'Isle of Islay', id: 257, abbrev: 'Isle of Islay' },
   { name: 'Isle of Jura', id: 259, abbrev: 'Isle of Jura' },
   { name: 'Isle of Lewis', id: 260, abbrev: 'Isle of Lewis' },
   { name: 'Isle of Mull', id: 261, abbrev: 'Isle of Mull' },
   { name: 'Isle of North Uist', id: 262, abbrev: 'Isle of North Uist' },
   { name: 'Isle of Rum', id: 263, abbrev: 'Isle of Rum' },
   { name: 'Isle of Scalpay', id: 264, abbrev: 'Isle of Scalpay' },
   { name: 'Isle of Skye', id: 265, abbrev: 'Isle of Skye' },
   { name: 'Isle of South Uist', id: 266, abbrev: 'Isle of South Uist' },
   { name: 'Isle of Tiree', id: 267, abbrev: 'Isle of Tiree' },
   { name: 'Isle of Wight', id: 268, abbrev: 'Isle of Wight' },
   { name: 'Kent', id: 269, abbrev: 'Kent' },
   { name: 'Kincardineshire', id: 270, abbrev: 'Kincardineshire' },
   { name: 'Kinross-shire', id: 271, abbrev: 'Kinross-shire' },
   { name: 'Kirkcudbrightshire', id: 272, abbrev: 'Kirkcudbrightshire' },
   { name: 'Lanarkshire', id: 273, abbrev: 'Lanarkshire' },
   { name: 'Lancashire', id: 274, abbrev: 'Lancs.' },
   { name: 'Leicestershire', id: 275, abbrev: 'Leics.' },
   { name: 'Lincolnshire', id: 276, abbrev: 'Lincs.' },
   { name: 'Merseyside', id: 277, abbrev: 'Merseyside' },
   { name: 'Mid Glamorgan', id: 278, abbrev: 'M Glam' },
   { name: 'Mid Lothian', id: 279, abbrev: 'Mid Lothian' },
   { name: 'Middlesex', id: 280, abbrev: 'Middx.' },
   { name: 'Morayshire', id: 281, abbrev: 'Morayshire' },
   { name: 'Nairnshire', id: 282, abbrev: 'Nairnshire' },
   { name: 'Norfolk', id: 283, abbrev: 'Norfolk' },
   { name: 'North Humberside', id: 284, abbrev: 'N Humberside' },
   { name: 'North Yorkshire', id: 285, abbrev: 'N Yorkshire' },
   { name: 'Northamptonshire', id: 286, abbrev: 'Northants.' },
   { name: 'Northumberland', id: 287, abbrev: 'Northumberland' },
   { name: 'Nottinghamshire', id: 288, abbrev: 'Notts.' },
   { name: 'Oxfordshire', id: 289, abbrev: 'Oxon.' },
   { name: 'Peeblesshire', id: 290, abbrev: 'Peeblesshire' },
   { name: 'Perthshire', id: 291, abbrev: 'Perthshire' },
   { name: 'Powys', id: 292, abbrev: 'Powys' },
   { name: 'Renfrewshire', id: 293, abbrev: 'Renfrewshire' },
   { name: 'Ross-shire', id: 294, abbrev: 'Ross-shire' },
   { name: 'Roxburghshire', id: 295, abbrev: 'Roxburghshire' },
   { name: 'Selkirkshire', id: 298, abbrev: 'Selkirkshire' },
   { name: 'Shropshire', id: 297, abbrev: 'Shrops' },
   { name: 'Somerset', id: 299, abbrev: 'Somt.' },
   { name: 'South Glamorgan', id: 300, abbrev: 'S Glam' },
   { name: 'South Humberside', id: 301, abbrev: 'S Humberside' },
   { name: 'South Yorkshire', id: 302, abbrev: 'S Yorkshire' },
   { name: 'Staffordshire', id: 303, abbrev: 'Staffs.' },
   { name: 'Stirlingshire', id: 304, abbrev: 'Stirlingshire' },
   { name: 'Suffolk', id: 305, abbrev: 'Suffolk' },
   { name: 'Surrey', id: 306, abbrev: 'Surrey' },
   { name: 'Sutherland', id: 307, abbrev: 'Sutherland' },
   { name: 'Tyne and Wear', id: 308, abbrev: 'Tyne & Wear' },
   { name: 'Warwickshire', id: 309, abbrev: 'Warks' },
   { name: 'West Glamorgan', id: 310, abbrev: 'W Glam' },
   { name: 'West Lothian', id: 311, abbrev: 'W Lothian' },
   { name: 'West Midlands', id: 312, abbrev: 'W Midlands' },
   { name: 'West Sussex', id: 313, abbrev: 'W Sussex' },
   { name: 'West Yorkshire', id: 314, abbrev: 'W Yorkshire' },
   { name: 'Wigtownshire', id: 315, abbrev: 'Wigtownshire' },
   { name: 'Wiltshire', id: 316, abbrev: 'Wilts' },
   { name: 'Worcestershire', id: 317, abbrev: 'Worcs' },
   // Japan
   { name: 'Hokkaidō', id: 700, abbrev: '北海道' },
   { name: 'Aomori', id: 701, abbrev: '青森県' },
   { name: 'Iwate', id: 702, abbrev: '岩手県' },
   { name: 'Miyagi', id: 703, abbrev: '宮城県' },
   { name: 'Akita', id: 704, abbrev: '秋田県' },
   { name: 'Yamagata', id: 705, abbrev: '山形県' },
   { name: 'Fukushima', id: 706, abbrev: '福島県' },
   { name: 'Ibaraki', id: 707, abbrev: '茨城県' },
   { name: 'Tochigi', id: 708, abbrev: '栃木県' },
   { name: 'Gunma', id: 709, abbrev: '群馬県' },
   { name: 'Saitama', id: 710, abbrev: '埼玉県' },
   { name: 'Chiba', id: 711, abbrev: '千葉県' },
   { name: 'Tokyo', id: 712, abbrev: '東京都' },
   { name: 'Kanagawa', id: 713, abbrev: '神奈川県' },
   { name: 'Niigata', id: 714, abbrev: '新潟県' },
   { name: 'Toyama', id: 715, abbrev: '富山県' },
   { name: 'Ishikawa', id: 716, abbrev: '石川県' },
   { name: 'Fukui', id: 717, abbrev: '福井県' },
   { name: 'Yamanashi', id: 718, abbrev: '山梨県' },
   { name: 'Nagano', id: 719, abbrev: '長野県' },
   { name: 'Gifu', id: 720, abbrev: '岐阜県' },
   { name: 'Shizuoka', id: 721, abbrev: '静岡県' },
   { name: 'Aichi', id: 722, abbrev: '愛知県' },
   { name: 'Mie', id: 723, abbrev: '三重県' },
   { name: 'Shiga', id: 724, abbrev: '滋賀県' },
   { name: 'Kyoto', id: 725, abbrev: '京都府' },
   { name: 'Osaka', id: 726, abbrev: '大阪府' },
   { name: 'Hyōgo', id: 727, abbrev: '兵庫県' },
   { name: 'Nara', id: 728, abbrev: '奈良県' },
   { name: 'Wakayama', id: 729, abbrev: '和歌山県' },
   { name: 'Tottori', id: 730, abbrev: '鳥取県' },
   { name: 'Shimane', id: 731, abbrev: '島根県' },
   { name: 'Okayama', id: 732, abbrev: '岡山県' },
   { name: 'Hiroshima', id: 733, abbrev: '広島県' },
   { name: 'Yamaguchi', id: 734, abbrev: '山口県' },
   { name: 'Tokushima', id: 735, abbrev: '徳島県' },
   { name: 'Kagawa', id: 736, abbrev: '香川県' },
   { name: 'Ehime', id: 737, abbrev: '愛媛県' },
   { name: 'Kochi', id: 738, abbrev: '高知県' },
   { name: 'Fukuoka', id: 739, abbrev: '福岡県' },
   { name: 'Saga', id: 740, abbrev: '佐賀県' },
   { name: 'Nagasaki', id: 741, abbrev: '長崎県' },
   { name: 'Kumamoto', id: 742, abbrev: '熊本県' },
   { name: 'Ōita', id: 743, abbrev: '大分県' },
   { name: 'Miyazaki', id: 744, abbrev: '宮崎県' },
   { name: 'Kagoshima', id: 745, abbrev: '鹿児島県' },
   { name: 'Okinawa', id: 746, abbrev: '沖縄県' }
]

/**
 * Retrieves the state object for the given internal id else null
 * @param id internal id of the state you wish to find.
 */
export const getStateById: (number ) => State | undefined = (id:number) => {
   const s = stateMapping.filter((x:State) => x.id === id)
   if (s.length) return s[0]
   else return undefined
}

/**
 * Mappings of country abbreviation, name and NetSuite internal id.
 */
export const countryMapping: Country[] = [{ name: '', id: 0, abbrev: '' },
   { name: 'Andorra', id: 1, abbrev: 'AD' },
   { name: 'United Arab Emirates', id: 2, abbrev: 'AE' },
   { name: 'Afghanistan', id: 3, abbrev: 'AF' },
   { name: 'Antigua and Barbuda', id: 4, abbrev: 'AG' },
   { name: 'Anguilla', id: 5, abbrev: 'AI' },
   { name: 'Albania', id: 6, abbrev: 'AL' },
   { name: 'Armenia', id: 7, abbrev: 'AM' },
   { name: 'Netherlands Antilles (Deprecated)', id: 8, abbrev: 'AN' },
   { name: 'Angola', id: 9, abbrev: 'AO' },
   { name: 'Antarctica', id: 10, abbrev: 'AQ' },
   { name: 'Argentina', id: 11, abbrev: 'AR' },
   { name: 'American Samoa', id: 12, abbrev: 'AS' },
   { name: 'Austria', id: 13, abbrev: 'AT' },
   { name: 'Australia', id: 14, abbrev: 'AU' },
   { name: 'Aruba', id: 15, abbrev: 'AW' },
   { name: 'Azerbaijan', id: 16, abbrev: 'AZ' },
   { name: 'Bosnia and Herzegovina', id: 17, abbrev: 'BA' },
   { name: 'Barbados', id: 18, abbrev: 'BB' },
   { name: 'Bangladesh', id: 19, abbrev: 'BD' },
   { name: 'Belgium', id: 20, abbrev: 'BE' },
   { name: 'Burkina Faso', id: 21, abbrev: 'BF' },
   { name: 'Bulgaria', id: 22, abbrev: 'BG' },
   { name: 'Bahrain', id: 23, abbrev: 'BH' },
   { name: 'Burundi', id: 24, abbrev: 'BI' },
   { name: 'Benin', id: 25, abbrev: 'BJ' },
   { name: 'Saint Barthélemy', id: 26, abbrev: 'BL' },
   { name: 'Bermuda', id: 27, abbrev: 'BM' },
   { name: 'Brunei Darussalam', id: 28, abbrev: 'BN' },
   { name: 'Bolivia', id: 29, abbrev: 'BO' },
   { name: 'Brazil', id: 30, abbrev: 'BR' },
   { name: 'Bahamas', id: 31, abbrev: 'BS' },
   { name: 'Bhutan', id: 32, abbrev: 'BT' },
   { name: 'Bouvet Island', id: 33, abbrev: 'BV' },
   { name: 'Botswana', id: 34, abbrev: 'BW' },
   { name: 'Belarus', id: 35, abbrev: 'BY' },
   { name: 'Belize', id: 36, abbrev: 'BZ' },
   { name: 'Canada', id: 37, abbrev: 'CA' },
   { name: 'Cocos (Keeling) Islands', id: 38, abbrev: 'CC' },
   { name: 'Congo, Democratic Republic of', id: 39, abbrev: 'CD' },
   { name: 'Central African Republic', id: 40, abbrev: 'CF' },
   { name: 'Congo, Republic of', id: 41, abbrev: 'CG' },
   { name: 'Switzerland', id: 42, abbrev: 'CH' },
   { name: 'Cote d\'Ivoire', id: 43, abbrev: 'CI' },
   { name: 'Cook Islands', id: 44, abbrev: 'CK' },
   { name: 'Chile', id: 45, abbrev: 'CL' },
   { name: 'Cameroon', id: 46, abbrev: 'CM' },
   { name: 'China', id: 47, abbrev: 'CN' },
   { name: 'Colombia', id: 48, abbrev: 'CO' },
   { name: 'Costa Rica', id: 49, abbrev: 'CR' },
   { name: 'Serbia', id: 50, abbrev: 'RS' },
   { name: 'Serbia and Montenegro (Deprecated)', id: 51, abbrev: 'CS' },
   { name: 'Cuba', id: 52, abbrev: 'CU' },
   { name: 'Cape Verde', id: 53, abbrev: 'CV' },
   { name: 'Christmas Island', id: 54, abbrev: 'CX' },
   { name: 'Cyprus', id: 55, abbrev: 'CY' },
   { name: 'Czech Republic', id: 56, abbrev: 'CZ' },
   { name: 'Germany', id: 57, abbrev: 'DE' },
   { name: 'Djibouti', id: 58, abbrev: 'DJ' },
   { name: 'Denmark', id: 59, abbrev: 'DK' },
   { name: 'Dominica', id: 60, abbrev: 'DM' },
   { name: 'Dominican Republic', id: 61, abbrev: 'DO' },
   { name: 'Algeria', id: 62, abbrev: 'DZ' },
   { name: 'Ecuador', id: 63, abbrev: 'EC' },
   { name: 'Estonia', id: 64, abbrev: 'EE' },
   { name: 'Egypt', id: 65, abbrev: 'EG' },
   { name: 'Western Sahara', id: 66, abbrev: 'EH' },
   { name: 'Eritrea', id: 67, abbrev: 'ER' },
   { name: 'Spain', id: 68, abbrev: 'ES' },
   { name: 'Ethiopia', id: 69, abbrev: 'ET' },
   { name: 'Finland', id: 70, abbrev: 'FI' },
   { name: 'Fiji', id: 71, abbrev: 'FJ' },
   { name: 'Falkland Islands', id: 72, abbrev: 'FK' },
   { name: 'Micronesia, Federal State of', id: 73, abbrev: 'FM' },
   { name: 'Faroe Islands', id: 74, abbrev: 'FO' },
   { name: 'France', id: 75, abbrev: 'FR' },
   { name: 'Gabon', id: 76, abbrev: 'GA' },
   { name: 'United Kingdom', id: 77, abbrev: 'GB' },
   { name: 'Grenada', id: 78, abbrev: 'GD' },
   { name: 'Georgia', id: 79, abbrev: 'GE' },
   { name: 'French Guiana', id: 80, abbrev: 'GF' },
   { name: 'Guernsey', id: 81, abbrev: 'GG' },
   { name: 'Ghana', id: 82, abbrev: 'GH' },
   { name: 'Gibraltar', id: 83, abbrev: 'GI' },
   { name: 'Greenland', id: 84, abbrev: 'GL' },
   { name: 'Gambia', id: 85, abbrev: 'GM' },
   { name: 'Guinea', id: 86, abbrev: 'GN' },
   { name: 'Guadeloupe', id: 87, abbrev: 'GP' },
   { name: 'Equatorial Guinea', id: 88, abbrev: 'GQ' },
   { name: 'Greece', id: 89, abbrev: 'GR' },
   { name: 'South Georgia', id: 90, abbrev: 'GS' },
   { name: 'Guatemala', id: 91, abbrev: 'GT' },
   { name: 'Guam', id: 92, abbrev: 'GU' },
   { name: 'Guinea-Bissau', id: 93, abbrev: 'GW' },
   { name: 'Guyana', id: 94, abbrev: 'GY' },
   { name: 'Hong Kong', id: 95, abbrev: 'HK' },
   { name: 'Heard and McDonald Islands', id: 96, abbrev: 'HM' },
   { name: 'Honduras', id: 97, abbrev: 'HN' },
   { name: 'Croatia/Hrvatska', id: 98, abbrev: 'HR' },
   { name: 'Haiti', id: 99, abbrev: 'HT' },
   { name: 'Hungary', id: 100, abbrev: 'HU' },
   { name: 'Indonesia', id: 101, abbrev: 'ID' },
   { name: 'Ireland', id: 102, abbrev: 'IE' },
   { name: 'Israel', id: 103, abbrev: 'IL' },
   { name: 'Isle of Man', id: 104, abbrev: 'IM' },
   { name: 'India', id: 105, abbrev: 'IN' },
   { name: 'British Indian Ocean Territory', id: 106, abbrev: 'IO' },
   { name: 'Iraq', id: 107, abbrev: 'IQ' },
   { name: 'Iran (Islamic Republic of)', id: 108, abbrev: 'IR' },
   { name: 'Iceland', id: 109, abbrev: 'IS' },
   { name: 'Italy', id: 110, abbrev: 'IT' },
   { name: 'Jersey', id: 111, abbrev: 'JE' },
   { name: 'Jamaica', id: 112, abbrev: 'JM' },
   { name: 'Jordan', id: 113, abbrev: 'JO' },
   { name: 'Japan', id: 114, abbrev: 'JP' },
   { name: 'Kenya', id: 115, abbrev: 'KE' },
   { name: 'Kyrgyzstan', id: 116, abbrev: 'KG' },
   { name: 'Cambodia', id: 117, abbrev: 'KH' },
   { name: 'Kiribati', id: 118, abbrev: 'KI' },
   { name: 'Comoros', id: 119, abbrev: 'KM' },
   { name: 'Saint Kitts and Nevis', id: 120, abbrev: 'KN' },
   { name: 'Korea, Democratic People\'s Republic', id: 121, abbrev: 'KP' },
   { name: 'Korea, Republic of', id: 122, abbrev: 'KR' },
   { name: 'Kuwait', id: 123, abbrev: 'KW' },
   { name: 'Cayman Islands', id: 124, abbrev: 'KY' },
   { name: 'Kazakhstan', id: 125, abbrev: 'KZ' },
   { name: 'Lao People\'s Democratic Republic', id: 126, abbrev: 'LA' },
   { name: 'Lebanon', id: 127, abbrev: 'LB' },
   { name: 'Saint Lucia', id: 128, abbrev: 'LC' },
   { name: 'Liechtenstein', id: 129, abbrev: 'LI' },
   { name: 'Sri Lanka', id: 130, abbrev: 'LK' },
   { name: 'Liberia', id: 131, abbrev: 'LR' },
   { name: 'Lesotho', id: 132, abbrev: 'LS' },
   { name: 'Lithuania', id: 133, abbrev: 'LT' },
   { name: 'Luxembourg', id: 134, abbrev: 'LU' },
   { name: 'Latvia', id: 135, abbrev: 'LV' },
   { name: 'Libya', id: 136, abbrev: 'LY' },
   { name: 'Morocco', id: 137, abbrev: 'MA' },
   { name: 'Monaco', id: 138, abbrev: 'MC' },
   { name: 'Moldova, Republic of', id: 139, abbrev: 'MD' },
   { name: 'Montenegro', id: 140, abbrev: 'ME' },
   { name: 'Saint Martin', id: 141, abbrev: 'MF' },
   { name: 'Madagascar', id: 142, abbrev: 'MG' },
   { name: 'Marshall Islands', id: 143, abbrev: 'MH' },
   { name: 'Macedonia', id: 144, abbrev: 'MK' },
   { name: 'Mali', id: 145, abbrev: 'ML' },
   { name: 'Myanmar (Burma)', id: 146, abbrev: 'MM' },
   { name: 'Mongolia', id: 147, abbrev: 'MN' },
   { name: 'Macau', id: 148, abbrev: 'MO' },
   { name: 'Northern Mariana Islands', id: 149, abbrev: 'MP' },
   { name: 'Martinique', id: 150, abbrev: 'MQ' },
   { name: 'Mauritania', id: 151, abbrev: 'MR' },
   { name: 'Montserrat', id: 152, abbrev: 'MS' },
   { name: 'Malta', id: 153, abbrev: 'MT' },
   { name: 'Mauritius', id: 154, abbrev: 'MU' },
   { name: 'Maldives', id: 155, abbrev: 'MV' },
   { name: 'Malawi', id: 156, abbrev: 'MW' },
   { name: 'Mexico', id: 157, abbrev: 'MX' },
   { name: 'Malaysia', id: 158, abbrev: 'MY' },
   { name: 'Mozambique', id: 159, abbrev: 'MZ' },
   { name: 'Namibia', id: 160, abbrev: 'NA' },
   { name: 'New Caledonia', id: 161, abbrev: 'NC' },
   { name: 'Niger', id: 162, abbrev: 'NE' },
   { name: 'Norfolk Island', id: 163, abbrev: 'NF' },
   { name: 'Nigeria', id: 164, abbrev: 'NG' },
   { name: 'Nicaragua', id: 165, abbrev: 'NI' },
   { name: 'Netherlands', id: 166, abbrev: 'NL' },
   { name: 'Norway', id: 167, abbrev: 'NO' },
   { name: 'Nepal', id: 168, abbrev: 'NP' },
   { name: 'Nauru', id: 169, abbrev: 'NR' },
   { name: 'Niue', id: 170, abbrev: 'NU' },
   { name: 'New Zealand', id: 171, abbrev: 'NZ' },
   { name: 'Oman', id: 172, abbrev: 'OM' },
   { name: 'Panama', id: 173, abbrev: 'PA' },
   { name: 'Peru', id: 174, abbrev: 'PE' },
   { name: 'French Polynesia', id: 175, abbrev: 'PF' },
   { name: 'Papua New Guinea', id: 176, abbrev: 'PG' },
   { name: 'Philippines', id: 177, abbrev: 'PH' },
   { name: 'Pakistan', id: 178, abbrev: 'PK' },
   { name: 'Poland', id: 179, abbrev: 'PL' },
   { name: 'St. Pierre and Miquelon', id: 180, abbrev: 'PM' },
   { name: 'Pitcairn Island', id: 181, abbrev: 'PN' },
   { name: 'Puerto Rico', id: 182, abbrev: 'PR' },
   { name: 'State of Palestine', id: 183, abbrev: 'PS' },
   { name: 'Portugal', id: 184, abbrev: 'PT' },
   { name: 'Palau', id: 185, abbrev: 'PW' },
   { name: 'Paraguay', id: 186, abbrev: 'PY' },
   { name: 'Qatar', id: 187, abbrev: 'QA' },
   { name: 'Reunion Island', id: 188, abbrev: 'RE' },
   { name: 'Romania', id: 189, abbrev: 'RO' },
   { name: 'Russian Federation', id: 190, abbrev: 'RU' },
   { name: 'Rwanda', id: 191, abbrev: 'RW' },
   { name: 'Saudi Arabia', id: 192, abbrev: 'SA' },
   { name: 'Solomon Islands', id: 193, abbrev: 'SB' },
   { name: 'Seychelles', id: 194, abbrev: 'SC' },
   { name: 'Sudan', id: 195, abbrev: 'SD' },
   { name: 'Sweden', id: 196, abbrev: 'SE' },
   { name: 'Singapore', id: 197, abbrev: 'SG' },
   { name: 'Saint Helena', id: 198, abbrev: 'SH' },
   { name: 'Slovenia', id: 199, abbrev: 'SI' },
   { name: 'Svalbard and Jan Mayen Islands', id: 200, abbrev: 'SJ' },
   { name: 'Slovak Republic', id: 201, abbrev: 'SK' },
   { name: 'Sierra Leone', id: 202, abbrev: 'SL' },
   { name: 'San Marino', id: 203, abbrev: 'SM' },
   { name: 'Senegal', id: 204, abbrev: 'SN' },
   { name: 'Somalia', id: 205, abbrev: 'SO' },
   { name: 'Suriname', id: 206, abbrev: 'SR' },
   { name: 'Sao Tome and Principe', id: 207, abbrev: 'ST' },
   { name: 'El Salvador', id: 208, abbrev: 'SV' },
   { name: 'Syrian Arab Republic', id: 209, abbrev: 'SY' },
   { name: 'Swaziland', id: 210, abbrev: 'SZ' },
   { name: 'Turks and Caicos Islands', id: 211, abbrev: 'TC' },
   { name: 'Chad', id: 212, abbrev: 'TD' },
   { name: 'French Southern Territories', id: 213, abbrev: 'TF' },
   { name: 'Togo', id: 214, abbrev: 'TG' },
   { name: 'Thailand', id: 215, abbrev: 'TH' },
   { name: 'Tajikistan', id: 216, abbrev: 'TJ' },
   { name: 'Tokelau', id: 217, abbrev: 'TK' },
   { name: 'Turkmenistan', id: 218, abbrev: 'TM' },
   { name: 'Tunisia', id: 219, abbrev: 'TN' },
   { name: 'Tonga', id: 220, abbrev: 'TO' },
   { name: 'East Timor', id: 221, abbrev: 'TL' },
   { name: 'Turkey', id: 222, abbrev: 'TR' },
   { name: 'Trinidad and Tobago', id: 223, abbrev: 'TT' },
   { name: 'Tuvalu', id: 224, abbrev: 'TV' },
   { name: 'Taiwan', id: 225, abbrev: 'TW' },
   { name: 'Tanzania', id: 226, abbrev: 'TZ' },
   { name: 'Ukraine', id: 227, abbrev: 'UA' },
   { name: 'Uganda', id: 228, abbrev: 'UG' },
   { name: 'US Minor Outlying Islands', id: 229, abbrev: 'UM' },
   { name: 'United States', id: 230, abbrev: 'US' },
   { name: 'Uruguay', id: 231, abbrev: 'UY' },
   { name: 'Uzbekistan', id: 232, abbrev: 'UZ' },
   { name: 'Holy See (City Vatican State)', id: 233, abbrev: 'VA' },
   { name: 'Saint Vincent and the Grenadines', id: 234, abbrev: 'VC' },
   { name: 'Venezuela', id: 235, abbrev: 'VE' },
   { name: 'Virgin Islands (British)', id: 236, abbrev: 'VG' },
   { name: 'Virgin Islands (USA)', id: 237, abbrev: 'VI' },
   { name: 'Vietnam', id: 238, abbrev: 'VN' },
   { name: 'Vanuatu', id: 239, abbrev: 'VU' },
   { name: 'Wallis and Futuna', id: 240, abbrev: 'WF' },
   { name: 'Samoa', id: 241, abbrev: 'WS' },
   { name: 'Yemen', id: 242, abbrev: 'YE' },
   { name: 'Mayotte', id: 243, abbrev: 'YT' },
   { name: 'South Africa', id: 244, abbrev: 'ZA' },
   { name: 'Zambia', id: 245, abbrev: 'ZM' },
   { name: 'Zimbabwe', id: 246, abbrev: 'ZW' },
   { name: 'Aland Islands', id: 247, abbrev: 'AX' },
   { name: 'Ceuta and Melilla', id: 248, abbrev: 'EA' },
   { name: 'Canary Islands', id: 249, abbrev: 'IC' },
   { name: 'Bonaire, Saint Eustatius and Saba', id: 250, abbrev: 'BQ' },
   { name: 'Curaçao', id: 251, abbrev: 'CW' },
   { name: 'Sint Maarten', id: 252, abbrev: 'SX' },
   { name: 'South Sudan', id: 253, abbrev: 'SS' },
   { name: 'Kosovo', id: 254, abbrev: 'XK' }
]

/**
 * Retrieves the given country by NS internal id via the static `countryMapping` list.
 * @see `countryMapping`
 * @param id country internal id
 */
export const getCountryById : (id:number) => Country | undefined = (id: number) => {
   const countries = countryMapping.filter((x:State) => x.id === id)
   if (countries.length) return countries[0]
   else return undefined
}

