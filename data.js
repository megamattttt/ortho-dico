/* data.js — Bibliothèque de vocabulaire
 * Chaque catégorie : { id, nom, icone, elements:[] } ou { id, nom, icone, sousCategories:[] }
 * Chaque élément    : { nom (affiché, FR), mot (mot-clé de recherche Openverse) }
 */

const CATEGORIES = [
  {
    id: 'legumes',
    nom: 'Légumes',
    icone: '🥕',
    elements: [
      { nom: 'Carotte', mot: 'carrot', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Carrots_at_Ljubljana_Central_Market.JPG/960px-Carrots_at_Ljubljana_Central_Market.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Tomate', mot: 'tomato', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/960px-Bright_red_tomato_and_cross_section02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Pomme de terre', mot: 'potato' },
      { nom: 'Courgette', mot: 'zucchini', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Zucchini_%2820221106509%29.jpg/960px-Zucchini_%2820221106509%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Aubergine', mot: 'eggplant', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Eggplant_aubergine_brinjal.jpg/960px-Eggplant_aubergine_brinjal.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Poivron', mot: 'bell pepper' },
      { nom: 'Concombre', mot: 'cucumber' },
      { nom: 'Salade', mot: 'lettuce', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Lactuca_sativa_%27Ashbrook%27.jpg/960px-Lactuca_sativa_%27Ashbrook%27.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Chou-fleur', mot: 'cauliflower', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Bloemkool.jpg/960px-Bloemkool.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Brocoli', mot: 'broccoli' },
      { nom: 'Oignon', mot: 'onion', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Oignon_%C3%A0_Bonoua_au_march%C3%A9.jpg/960px-Oignon_%C3%A0_Bonoua_au_march%C3%A9.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Ail', mot: 'garlic' },
      { nom: 'Poireau', mot: 'leek', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Porree_Ernte_von_Hand-4-Josef_Schlaghecken.jpg/960px-Porree_Ernte_von_Hand-4-Josef_Schlaghecken.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Haricot vert', mot: 'green beans' },
      { nom: 'Petit pois', mot: 'green peas', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Green_peas_batch.jpg/960px-Green_peas_batch.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Champignon', mot: 'mushroom', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Agaricus_bisporus_Zuchtchampignon.JPG/960px-Agaricus_bisporus_Zuchtchampignon.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Radis', mot: 'radish', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Radish_3371103037_4ab07db0bf_o.jpg/960px-Radish_3371103037_4ab07db0bf_o.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Épinard', mot: 'spinach', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Pseudoperonospora_farinosa_f.sp._spinaciae_at_Spinacia_oleracea_%281%29.jpg/960px-Pseudoperonospora_farinosa_f.sp._spinaciae_at_Spinacia_oleracea_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Maïs', mot: 'corn cob', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Drying_Zea_mays_in_Chinese_country_20171005.jpg/960px-Drying_Zea_mays_in_Chinese_country_20171005.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Citrouille', mot: 'pumpkin', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Citrouille_FR_2013.jpg/960px-Citrouille_FR_2013.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Betterave', mot: 'beetroot', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Beetroot_jm26647.jpg/960px-Beetroot_jm26647.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Navet', mot: 'turnip', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Turnip_2622027.jpg/960px-Turnip_2622027.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' }
    ]
  },
  {
    id: 'fruits',
    nom: 'Fruits',
    icone: '🍎',
    elements: [
      { nom: 'Pomme', mot: 'apple fruit', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Pink_lady_and_cross_section.jpg/960px-Pink_lady_and_cross_section.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Poire', mot: 'pear fruit' },
      { nom: 'Banane', mot: 'banana' },
      { nom: 'Orange', mot: 'orange fruit' },
      { nom: 'Citron', mot: 'lemon' },
      { nom: 'Fraise', mot: 'strawberry' },
      { nom: 'Framboise', mot: 'raspberry' },
      { nom: 'Cerise', mot: 'cherries' },
      { nom: 'Raisin', mot: 'grapes' },
      { nom: 'Pêche', mot: 'peach fruit' },
      { nom: 'Abricot', mot: 'apricot', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Apricot_and_cross_section.jpg/960px-Apricot_and_cross_section.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Prune', mot: 'plum fruit', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Bluebyrd_plum_%281%29.jpg/960px-Bluebyrd_plum_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Ananas', mot: 'pineapple', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Starr-100629-7860-Ananas_comosus-lots_of_fruit-Ulupalakua_Ranch-Maui_%2825016149396%29.jpg/960px-Starr-100629-7860-Ananas_comosus-lots_of_fruit-Ulupalakua_Ranch-Maui_%2825016149396%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Kiwi', mot: 'kiwi fruit', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg/960px-Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Melon', mot: 'melon', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Canteloupe_and_cross_section.jpg/960px-Canteloupe_and_cross_section.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Pastèque', mot: 'watermelon', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Citrullus_lanatus5SHSU.jpg/960px-Citrullus_lanatus5SHSU.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Mangue', mot: 'mango' },
      { nom: 'Noix de coco', mot: 'coconut' },
      { nom: 'Avocat', mot: 'avocado', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Avocado_from_Contreras_Ranch_Avocados%2C_Carpinteria%2C_California.jpg/960px-Avocado_from_Contreras_Ranch_Avocados%2C_Carpinteria%2C_California.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Figue', mot: 'fig fruit', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Bowl_of_Figs.jpg/960px-Bowl_of_Figs.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Noix', mot: 'walnut', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Walnuts_-_whole_and_open_with_halved_kernel.jpg/960px-Walnuts_-_whole_and_open_with_halved_kernel.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Châtaigne', mot: 'chestnut', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Frucht_der_Edelkastanie.jpg/960px-Frucht_der_Edelkastanie.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' }
    ]
  },
  {
    id: 'metiers',
    nom: 'Métiers',
    icone: '👩‍🏫',
    elements: [
      { nom: 'Médecin', mot: 'doctor', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Typhoid_inoculation2.jpg/960px-Typhoid_inoculation2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Infirmière', mot: 'nurse', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Nurse_checks_blood_pressure.jpg/960px-Nurse_checks_blood_pressure.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Pompier', mot: 'firefighter' },
      { nom: 'Policier', mot: 'police officer', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Members_of_the_Calgary_Police_Service%2C_including_Police_Chief_Mark_Neufeld%2C_pose_for_a_photo_at_the_Canada_Day_festivities_in_Calgary%2C_Alberta.jpg/960px-Members_of_the_Calgary_Police_Service%2C_including_Police_Chief_Mark_Neufeld%2C_pose_for_a_photo_at_the_Canada_Day_festivities_in_Calgary%2C_Alberta.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Boulanger', mot: 'baker bread', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Baker_Oslo.jpg/960px-Baker_Oslo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Cuisinier', mot: 'chef cooking', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Chef_cuisinier_restaurateur%2C_Lamin_village%2C_Gambia.jpg/960px-Chef_cuisinier_restaurateur%2C_Lamin_village%2C_Gambia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Agriculteur', mot: 'farmer', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/04-09-12-Schaupfl%C3%BCgen-Fahrenwalde-RalfR-IMG_1232.jpg/960px-04-09-12-Schaupfl%C3%BCgen-Fahrenwalde-RalfR-IMG_1232.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Coiffeur', mot: 'hairdresser', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Hair_Salon_In_Iran.jpg/960px-Hair_Salon_In_Iran.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Maçon', mot: 'bricklayer construction worker', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Construction_workers_in_Iran_10.jpg/960px-Construction_workers_in_Iran_10.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Menuisier', mot: 'carpenter', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/2024-04-30_Carpenter_at_work_DSC_0205.JPG/960px-2024-04-30_Carpenter_at_work_DSC_0205.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Peintre', mot: 'painter artist', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/A_painter_at_work.jpg/960px-A_painter_at_work.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Mécanicien', mot: 'car mechanic', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Young_mechanic_with_laptop_doing_car_diagnostic_at_automobile_repair_shop_close.jpg/960px-Young_mechanic_with_laptop_doing_car_diagnostic_at_automobile_repair_shop_close.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Professeur', mot: 'teacher classroom', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Phoenix_Magnet_School%2C_Alexandria%2C_Louisiana.jpg/960px-Phoenix_Magnet_School%2C_Alexandria%2C_Louisiana.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Pilote', mot: 'airline pilot', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/2019_Isfahan_airbase_expo_%2887%29.jpg/960px-2019_Isfahan_airbase_expo_%2887%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Pêcheur', mot: 'fisherman', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Catamaran_sailor%2C_Krasnoyarsk_Reservoir%2C_Russia.jpg/960px-Catamaran_sailor%2C_Krasnoyarsk_Reservoir%2C_Russia.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Vétérinaire', mot: 'veterinarian', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Female_Veterinarian%2C_Business_Owner.jpg/960px-Female_Veterinarian%2C_Business_Owner.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Dentiste', mot: 'dentist', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Dentist-gd569d444b_1920.jpg/960px-Dentist-gd569d444b_1920.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Musicien', mot: 'musician', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b3/Deep_Purple_-_MN_Gredos_-_01.jpg/960px-Deep_Purple_-_MN_Gredos_-_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Jardinier', mot: 'gardener', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Tuinman_aan_het_werk_in_de_oranjerie_-_Goor_-_20405216_-_RCE_%281%29.jpg/960px-Tuinman_aan_het_werk_in_de_oranjerie_-_Goor_-_20405216_-_RCE_%281%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Photographe', mot: 'photographer', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Femmes_Photographes.jpg/960px-Femmes_Photographes.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Serveur', mot: 'waiter restaurant', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Waiter_in_a_restaurant%2C_Paris_2011.jpg/960px-Waiter_in_a_restaurant%2C_Paris_2011.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' }
    ]
  },
  {
    id: 'pays',
    nom: 'Pays',
    icone: '🌍',
    // Drapeaux officiels via FlagCDN (champ iso) ; l'emoji sert d'appoint à côté du nom.
    elements: [
      { nom: 'France', mot: 'france flag', drapeau: '🇫🇷', iso: 'fr' },
      { nom: 'Espagne', mot: 'spain flag', drapeau: '🇪🇸', iso: 'es' },
      { nom: 'Italie', mot: 'italy flag', drapeau: '🇮🇹', iso: 'it' },
      { nom: 'Allemagne', mot: 'germany flag', drapeau: '🇩🇪', iso: 'de' },
      { nom: 'Portugal', mot: 'portugal flag', drapeau: '🇵🇹', iso: 'pt' },
      { nom: 'Belgique', mot: 'belgium flag', drapeau: '🇧🇪', iso: 'be' },
      { nom: 'Suisse', mot: 'switzerland flag', drapeau: '🇨🇭', iso: 'ch' },
      { nom: 'Royaume-Uni', mot: 'united kingdom flag', drapeau: '🇬🇧', iso: 'gb' },
      { nom: 'Irlande', mot: 'ireland flag', drapeau: '🇮🇪', iso: 'ie' },
      { nom: 'Grèce', mot: 'greece flag', drapeau: '🇬🇷', iso: 'gr' },
      { nom: 'Pays-Bas', mot: 'netherlands flag', drapeau: '🇳🇱', iso: 'nl' },
      { nom: 'Suède', mot: 'sweden flag', drapeau: '🇸🇪', iso: 'se' },
      { nom: 'Norvège', mot: 'norway flag', drapeau: '🇳🇴', iso: 'no' },
      { nom: 'Pologne', mot: 'poland flag', drapeau: '🇵🇱', iso: 'pl' },
      { nom: 'Maroc', mot: 'morocco flag', drapeau: '🇲🇦', iso: 'ma' },
      { nom: 'Algérie', mot: 'algeria flag', drapeau: '🇩🇿', iso: 'dz' },
      { nom: 'Tunisie', mot: 'tunisia flag', drapeau: '🇹🇳', iso: 'tn' },
      { nom: 'Sénégal', mot: 'senegal flag', drapeau: '🇸🇳', iso: 'sn' },
      { nom: 'Canada', mot: 'canada flag', drapeau: '🇨🇦', iso: 'ca' },
      { nom: 'États-Unis', mot: 'united states flag', drapeau: '🇺🇸', iso: 'us' },
      { nom: 'Mexique', mot: 'mexico flag', drapeau: '🇲🇽', iso: 'mx' },
      { nom: 'Brésil', mot: 'brazil flag', drapeau: '🇧🇷', iso: 'br' },
      { nom: 'Japon', mot: 'japan flag', drapeau: '🇯🇵', iso: 'jp' },
      { nom: 'Chine', mot: 'china flag', drapeau: '🇨🇳', iso: 'cn' },
      { nom: 'Inde', mot: 'india flag', drapeau: '🇮🇳', iso: 'in' },
      { nom: 'Australie', mot: 'australia flag', drapeau: '🇦🇺', iso: 'au' }
    ]
  },
  {
    id: 'fleurs',
    nom: 'Fleurs',
    icone: '🌷',
    elements: [
      { nom: 'Rose', mot: 'rose flower' },
      { nom: 'Tulipe', mot: 'tulip' },
      { nom: 'Marguerite', mot: 'daisy flower' },
      { nom: 'Tournesol', mot: 'sunflower' },
      { nom: 'Coquelicot', mot: 'poppy flower' },
      { nom: 'Lavande', mot: 'lavender' },
      { nom: 'Muguet', mot: 'lily of the valley' },
      { nom: 'Jonquille', mot: 'daffodil' },
      { nom: 'Violette', mot: 'violet flower' },
      { nom: 'Pissenlit', mot: 'dandelion' },
      { nom: 'Lys', mot: 'lily flower' },
      { nom: 'Orchidée', mot: 'orchid' },
      { nom: 'Iris', mot: 'iris flower' },
      { nom: 'Pivoine', mot: 'peony' },
      { nom: 'Œillet', mot: 'carnation flower' },
      { nom: 'Bleuet', mot: 'cornflower' },
      { nom: 'Mimosa', mot: 'mimosa flower' },
      { nom: 'Hortensia', mot: 'hydrangea' },
      { nom: 'Géranium', mot: 'geranium' },
      { nom: 'Chrysanthème', mot: 'chrysanthemum' },
      { nom: 'Yucca', mot: 'yucca plant' },
      { nom: 'Zinnia', mot: 'zinnia flower' }
    ]
  },
  {
    id: 'objets',
    nom: 'Objets du quotidien',
    icone: '🪑',
    elements: [
      { nom: 'Chaise', mot: 'chair', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/%D0%A1%D0%B0%D0%B2%D0%B0_%D1%86%D0%B5%D0%BD%D1%82%D0%B0%D1%80_%D0%BA%D0%BE%D0%BD%D0%B3%D1%80%D0%B5%D1%81%D0%BD%D0%B0_%D1%81%D0%BE%D0%B1%D0%B0_%28Sava_Center%2C_convention_room%29.jpg/960px-%D0%A1%D0%B0%D0%B2%D0%B0_%D1%86%D0%B5%D0%BD%D1%82%D0%B0%D1%80_%D0%BA%D0%BE%D0%BD%D0%B3%D1%80%D0%B5%D1%81%D0%BD%D0%B0_%D1%81%D0%BE%D0%B1%D0%B0_%28Sava_Center%2C_convention_room%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Table', mot: 'table furniture', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Table_set_for_lunch.jpg/960px-Table_set_for_lunch.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Lit', mot: 'bed bedroom', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Bed_in_hotel_room_4.jpg/960px-Bed_in_hotel_room_4.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Lampe', mot: 'lamp', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Lamp_with_a_lampshade_illuminated_by_sunlight.jpg/960px-Lamp_with_a_lampshade_illuminated_by_sunlight.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Assiette', mot: 'plate dish', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Dish_and_plate_for_Midway_Gardens%2C_V%26A_London.jpg/960px-Dish_and_plate_for_Midway_Gardens%2C_V%26A_London.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Verre', mot: 'drinking glass', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Engraved_drinking_glass_03.jpg/960px-Engraved_drinking_glass_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Fourchette', mot: 'fork cutlery' },
      { nom: 'Couteau', mot: 'kitchen knife', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Knives_%2832778665701%29.jpg/960px-Knives_%2832778665701%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Cuillère', mot: 'spoon', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Ngaji.jpg/960px-Ngaji.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Casserole', mot: 'cooking pot', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Pot_with_no_background.png/960px-Pot_with_no_background.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Clé', mot: 'keys' },
      { nom: 'Téléphone', mot: 'mobile phone', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Mobile_phone_PHS_Japan_1997-2003.jpg/960px-Mobile_phone_PHS_Japan_1997-2003.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Livre', mot: 'book', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Liji_2.jpg/960px-Liji_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Crayon', mot: 'pencil', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/SAKURA_COUPY_PENCIL._%287988446132%29.jpg/960px-SAKURA_COUPY_PENCIL._%287988446132%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Ciseaux', mot: 'scissors' },
      { nom: 'Brosse à dents', mot: 'toothbrush', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Toothbrush_x3_20050716_002.jpg/960px-Toothbrush_x3_20050716_002.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Savon', mot: 'soap bar' },
      { nom: 'Parapluie', mot: 'umbrella', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/M0354_000727-005_1.jpg/960px-M0354_000727-005_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Horloge', mot: 'wall clock', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Pendulum_clock_by_Jacob_Kock%2C_antique_furniture_photography%2C_IMG_0931_edit.jpg/960px-Pendulum_clock_by_Jacob_Kock%2C_antique_furniture_photography%2C_IMG_0931_edit.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Miroir', mot: 'mirror', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/Mirror_MET_DP106620.jpg/960px-Mirror_MET_DP106620.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Balai', mot: 'broom', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/New_brooms_-_02.jpg/960px-New_brooms_-_02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Sac', mot: 'handbag' },
      { nom: 'Urne', mot: 'ballot box' },
      { nom: 'Quille', mot: 'bowling pin' },
      { nom: 'Yo-yo', mot: 'yoyo toy', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Wooden_yo-yo.jpg/960px-Wooden_yo-yo.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' }
    ]
  },
  {
    id: 'nature',
    nom: 'Éléments naturels',
    icone: '⛰️',
    elements: [
      { nom: 'Soleil', mot: 'sun sky', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg/960px-The_Sun_by_the_Atmospheric_Imaging_Assembly_of_NASA%27s_Solar_Dynamics_Observatory_-_20100819.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Lune', mot: 'moon' },
      { nom: 'Étoile', mot: 'star night sky', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hubble_ultra_deep_field.jpg/960px-Hubble_ultra_deep_field.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Nuage', mot: 'cloud sky' },
      { nom: 'Pluie', mot: 'rain' },
      { nom: 'Neige', mot: 'snow' },
      { nom: 'Arc-en-ciel', mot: 'rainbow' },
      { nom: 'Éclair', mot: 'lightning storm' },
      { nom: 'Montagne', mot: 'mountain', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Everest%2C_Himalayas.jpg/960px-Everest%2C_Himalayas.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Rivière', mot: 'river' },
      { nom: 'Mer', mot: 'sea ocean' },
      { nom: 'Plage', mot: 'sandy beach' },
      { nom: 'Forêt', mot: 'forest' },
      { nom: 'Arbre', mot: 'tree', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Flooded_Albizia_Saman_%28rain_tree%29_in_the_Mekong.jpg/960px-Flooded_Albizia_Saman_%28rain_tree%29_in_the_Mekong.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Rocher', mot: 'rock boulder', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Glen_Rock_%28boulder%29.jpg/960px-Glen_Rock_%28boulder%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Volcan', mot: 'volcano', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/MtCleveland_ISS013-E-24184.jpg/960px-MtCleveland_ISS013-E-24184.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Désert', mot: 'desert dunes', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Caravan_in_the_desert.jpg/960px-Caravan_in_the_desert.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Cascade', mot: 'waterfall' },
      { nom: 'Feu', mot: 'campfire', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Fire02.jpg/960px-Fire02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
    ]
  },
  {
    id: 'couleurs',
    nom: 'Couleurs',
    icone: '🎨',
    // Les couleurs sont rendues en aplat CSS (pas d'appel Openverse).
    elements: [
      { nom: 'Rouge', couleur: '#D6322C' },
      { nom: 'Bleu', couleur: '#2A5FC4' },
      { nom: 'Jaune', couleur: '#F2C230' },
      { nom: 'Vert', couleur: '#3B9C4F' },
      { nom: 'Orange', couleur: '#E8792B' },
      { nom: 'Violet', couleur: '#7B4BA8' },
      { nom: 'Rose', couleur: '#E87AA8' },
      { nom: 'Marron', couleur: '#8A5A33' },
      { nom: 'Noir', couleur: '#1C1C1C' },
      { nom: 'Blanc', couleur: '#FFFFFF' },
      { nom: 'Gris', couleur: '#9AA0A6' },
      { nom: 'Turquoise', couleur: '#1FA8A0' },
      { nom: 'Beige', couleur: '#E3D3B3' },
      { nom: 'Doré', couleur: '#C9A227' },
      { nom: 'Argenté', couleur: '#B9BEC4' }
    ]
  },
  {
    id: 'vetements',
    nom: 'Vêtements',
    icone: '👕',
    elements: [
      { nom: 'Tee-shirt', mot: 't-shirt', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/T-shirt2.jpg/960px-T-shirt2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Chemise', mot: 'shirt clothing', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Blue_Business_Shirt.jpg/960px-Blue_Business_Shirt.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Pull', mot: 'sweater', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Jersei-coll-alt.jpg/960px-Jersei-coll-alt.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Pantalon', mot: 'trousers pants', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Trousers-colourisolated.jpg/960px-Trousers-colourisolated.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Jean', mot: 'jeans', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Jeans_for_men.jpg/960px-Jeans_for_men.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Short', mot: 'shorts clothing', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Men%27s_Shorts_-_Old_Bull_Lee_-_Orange.jpg/960px-Men%27s_Shorts_-_Old_Bull_Lee_-_Orange.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Jupe', mot: 'skirt', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/A_girl_wearing_white_shoes_and_skirt%3B_April_2016_%2801%29.jpg/960px-A_girl_wearing_white_shoes_and_skirt%3B_April_2016_%2801%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Robe', mot: 'dress', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Dress_with_circle_skirt_in_the_wind_-_pose_2.jpg/960px-Dress_with_circle_skirt_in_the_wind_-_pose_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Manteau', mot: 'winter coat', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Winter_coat_with_houndstooth_pattern_over_long_knitted_dress_with_boots.jpg/960px-Winter_coat_with_houndstooth_pattern_over_long_knitted_dress_with_boots.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Veste', mot: 'jacket', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Harrington-jacket-marque-francaise-Harrington-bleu-Tartan-Royal-Stewart-byRundvald.jpg/960px-Harrington-jacket-marque-francaise-Harrington-bleu-Tartan-Royal-Stewart-byRundvald.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Chaussettes', mot: 'socks', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Villased_sokid%2C_STM_1998.jpg/960px-Villased_sokid%2C_STM_1998.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Chaussures', mot: 'shoes', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Asics_Gel-Cumulus_22.jpg/960px-Asics_Gel-Cumulus_22.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Bottes', mot: 'boots', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/BootsBr.jpg/960px-BootsBr.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Sandales', mot: 'sandals', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Grecian_sandals_%282%29.jpg/960px-Grecian_sandals_%282%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Chapeau', mot: 'hat', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/KnutSteen.1.jpg/960px-KnutSteen.1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Casquette', mot: 'baseball cap', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Laughing_boy_wearing_a_cap_with_embroidered_national_flag_in_Si_Phan_Don_Laos.jpg/960px-Laughing_boy_wearing_a_cap_with_embroidered_national_flag_in_Si_Phan_Don_Laos.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Écharpe', mot: 'scarf', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Dark_and_light_blue%2C_purple%2C_beige%2C_white_crochet_scarf_5.jpg/960px-Dark_and_light_blue%2C_purple%2C_beige%2C_white_crochet_scarf_5.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Gants', mot: 'gloves', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Fives_Gloves_and_Ball.jpg/960px-Fives_Gloves_and_Ball.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Ceinture', mot: 'leather belt', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Germany_Belt-and-Buckle-02.jpg/960px-Germany_Belt-and-Buckle-02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Pyjama', mot: 'pyjamas', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Woman_posing_in_country_pyjamas_on_stairs_%2848356493561%29.jpg/960px-Woman_posing_in_country_pyjamas_on_stairs_%2848356493561%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Maillot de bain', mot: 'swimsuit', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Cotton_jersey_bathing_suit_1910s_DSCF2210.jpg/960px-Cotton_jersey_bathing_suit_1910s_DSCF2210.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Cravate', mot: 'necktie', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/A_necktie_with_a_tie_clasp_of_Tokushimakita_Senior_High_School.jpg/960px-A_necktie_with_a_tie_clasp_of_Tokushimakita_Senior_High_School.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Kimono', mot: 'kimono', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Tokio_Hamarikyu-Garten_Kimono_Damen-20091017-RM-135639.jpg/960px-Tokio_Hamarikyu-Garten_Kimono_Damen-20091017-RM-135639.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' }
    ]
  },
  {
    id: 'transports',
    nom: 'Moyens de transport',
    icone: '🚗',
    elements: [
      { nom: 'Voiture', mot: 'car', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/2013_Porsche_911_Carrera_4S_%28991%29_%289626546987%29.jpg/960px-2013_Porsche_911_Carrera_4S_%28991%29_%289626546987%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Vélo', mot: 'bicycle' },
      { nom: 'Moto', mot: 'motorcycle' },
      { nom: 'Bus', mot: 'city bus', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Landskrona_City_bus_1.jpg/960px-Landskrona_City_bus_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Train', mot: 'train', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/RhB_ABe_8-12_Allegra_between_Lagalb_and_Ospizio_Bernina.jpg/960px-RhB_ABe_8-12_Allegra_between_Lagalb_and_Ospizio_Bernina.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Tramway', mot: 'tram', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/T3b_Porte_d%27Asnieres.jpg/960px-T3b_Porte_d%27Asnieres.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Métro', mot: 'subway train', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/U9_im_U-Bahnhof_Zoologischer_Garten.jpg/960px-U9_im_U-Bahnhof_Zoologischer_Garten.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Avion', mot: 'airplane' },
      { nom: 'Hélicoptère', mot: 'helicopter', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/LAPD_Bell_206_Jetranger.jpg/960px-LAPD_Bell_206_Jetranger.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Bateau', mot: 'boat' },
      { nom: 'Voilier', mot: 'sailboat' },
      { nom: 'Camion', mot: 'truck', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Steam_Whistle_Mack_truck_20110613-IMG_3584.JPG/960px-Steam_Whistle_Mack_truck_20110613-IMG_3584.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Tracteur', mot: 'tractor', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/YuMZ-6KL_tractor_2011_G1.jpg/960px-YuMZ-6KL_tractor_2011_G1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Ambulance', mot: 'ambulance', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Armstrong_Ambulance_P17.jpg/960px-Armstrong_Ambulance_P17.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Camion de pompiers', mot: 'fire truck' },
      { nom: 'Trottinette', mot: 'kick scooter', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Seattle_%28WA%2C_USA%29%2C_Pike_Street%2C_E-Scooter_--_2022_--_1460.jpg/960px-Seattle_%28WA%2C_USA%29%2C_Pike_Street%2C_E-Scooter_--_2022_--_1460.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Skateboard', mot: 'skateboard' },
      { nom: 'Montgolfière', mot: 'hot air balloon' },
      { nom: 'Fusée', mot: 'rocket launch' },
      { nom: 'Taxi', mot: 'taxi cab', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Cabs.jpg/960px-Cabs.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Kayak', mot: 'kayak', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Blue_and_Yellow_kayaks.jpg/960px-Blue_and_Yellow_kayaks.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Quad', mot: 'quad bike atv' },
      { nom: 'Yacht', mot: 'yacht', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/A_MYA_Langkawi_Yacht_-_Seychelles_-_2025_-_10.jpg/960px-A_MYA_Langkawi_Yacht_-_Seychelles_-_2025_-_10.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
    ]
  },
  {
    id: 'instruments',
    nom: 'Instruments de musique',
    icone: '🎸',
    elements: [
      { nom: 'Guitare', mot: 'guitar' },
      { nom: 'Piano', mot: 'piano' },
      { nom: 'Violon', mot: 'violin', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Violin_VL100.png/960px-Violin_VL100.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Violoncelle', mot: 'cello', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Cello_front_side.png/960px-Cello_front_side.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Flûte', mot: 'flute', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Western_Concert_Flute.jpg/960px-Western_Concert_Flute.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Clarinette', mot: 'clarinet' },
      { nom: 'Saxophone', mot: 'saxophone', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Saksofon_altowy_Serie_III_GP_firmy_Selmer.jpg/960px-Saksofon_altowy_Serie_III_GP_firmy_Selmer.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Trompette', mot: 'trumpet', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Yamaha_Trumpet_YTR-8335LA_crop.jpg/960px-Yamaha_Trumpet_YTR-8335LA_crop.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Trombone', mot: 'trombone', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Tenor_slide_trombone_3D_model.jpg/960px-Tenor_slide_trombone_3D_model.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Batterie', mot: 'drum kit', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Drum_set.svg/960px-Drum_set.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Tambour', mot: 'drum', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Drum_for_cultural_dance.jpg/960px-Drum_for_cultural_dance.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Harpe', mot: 'harp', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/A_musical_instrument._A_harp.jpg/960px-A_musical_instrument._A_harp.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Accordéon', mot: 'accordion', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/A_converter_free-bass_piano-accordion_and_a_Russian_bayan.jpg/960px-A_converter_free-bass_piano-accordion_and_a_Russian_bayan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Harmonica', mot: 'harmonica', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Marine_Band_harmonica.jpg/960px-Marine_Band_harmonica.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Xylophone', mot: 'xylophone', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Sieben_prismatische_Farben_003_2023_03_16.jpg/960px-Sieben_prismatische_Farben_003_2023_03_16.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Orgue', mot: 'pipe organ', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Pipe_organ_in_Wolvendaal_Church_%28Colombo%29.jpg/960px-Pipe_organ_in_Wolvendaal_Church_%28Colombo%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Triangle', mot: 'triangle instrument', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Musical_triangle.png/960px-Musical_triangle.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Cymbales', mot: 'cymbals', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Halile.jpg/960px-Halile.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Ukulélé', mot: 'ukulele', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/17_inch_pocket_ukulele_branded_%22ultnice%22.jpg/960px-17_inch_pocket_ukulele_branded_%22ultnice%22.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' }
    ]
  },
  {
    id: 'aliments',
    nom: 'Aliments',
    icone: '🍞',
    elements: [
      { nom: 'Croissant', mot: 'croissant', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Croissants_au_beurre_%2818953292873%29.jpg/960px-Croissants_au_beurre_%2818953292873%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Baguette', mot: 'baguette bread', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Baguettes_-_stonesoup.jpg/960px-Baguettes_-_stonesoup.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Fromage', mot: 'cheese', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Cheese_at_Fort_Ross_State_Historic_Park_-_Jenner%2C_California_-_Sarah_Stierch.jpg/960px-Cheese_at_Fort_Ross_State_Historic_Park_-_Jenner%2C_California_-_Sarah_Stierch.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Beurre', mot: 'butter', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/2023_Mas%C5%82o_w_maselniczce.jpg/960px-2023_Mas%C5%82o_w_maselniczce.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Yaourt', mot: 'yogurt', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Yogurt_vainilla_soja.jpg/960px-Yogurt_vainilla_soja.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Œuf', mot: 'egg', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Amazonetta_brasiliensis_MHNT.ZOO.2010.11.17.5.jpg/960px-Amazonetta_brasiliensis_MHNT.ZOO.2010.11.17.5.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Lait', mot: 'milk bottle', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Milk_glass.jpg/960px-Milk_glass.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Gâteau', mot: 'cake', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/2023-01-16_Cake_selection_at_buffet_1.jpg/960px-2023-01-16_Cake_selection_at_buffet_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Quiche', mot: 'quiche', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Coronation_Quiche%2C_May_2023_03.jpg/960px-Coronation_Quiche%2C_May_2023_03.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Ketchup', mot: 'ketchup bottle', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Ketchup_and_french_fries.jpg/960px-Ketchup_and_french_fries.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Confiture', mot: 'jam jar', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Jam_jar%2C_Kazakhstan.jpg/960px-Jam_jar%2C_Kazakhstan.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Chocolat', mot: 'chocolate bar', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Chocolate02.jpg/960px-Chocolate02.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Miel', mot: 'honey jar', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Runny_hunny.jpg/960px-Runny_hunny.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Riz', mot: 'rice bowl', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/A_bowl_of_rice.jpg/960px-A_bowl_of_rice.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Pâtes', mot: 'pasta', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/A_plate_of_red_sauce_pasta.jpg/960px-A_plate_of_red_sauce_pasta.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Soupe', mot: 'soup bowl', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Asparagus_soup_%28spargelsuppe%29.jpg/960px-Asparagus_soup_%28spargelsuppe%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Pizza', mot: 'pizza', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Pizza_basil.jpg/960px-Pizza_basil.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Sandwich', mot: 'sandwich' },
      { nom: 'Crêpe', mot: 'crepe pancake', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Crepes_dsc07085.jpg/960px-Crepes_dsc07085.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
      { nom: 'Glace', mot: 'ice cream cone' },
      { nom: 'Sucre', mot: 'sugar cubes' }
    ]
  },
  {
    id: 'animaux',
    nom: 'Animaux',
    icone: '🐾',
    sousCategories: [
      {
        id: 'mammiferes',
        nom: 'Mammifères',
        icone: '🦊',
        elements: [
          { nom: 'Chien', mot: 'dog' },
          { nom: 'Chat', mot: 'cat' },
          { nom: 'Cheval', mot: 'horse' },
          { nom: 'Vache', mot: 'cow' },
          { nom: 'Mouton', mot: 'sheep' },
          { nom: 'Chèvre', mot: 'goat' },
          { nom: 'Cochon', mot: 'pig' },
          { nom: 'Lapin', mot: 'rabbit' },
          { nom: 'Souris', mot: 'mouse animal' },
          { nom: 'Écureuil', mot: 'squirrel' },
          { nom: 'Renard', mot: 'fox' },
          { nom: 'Loup', mot: 'wolf' },
          { nom: 'Ours', mot: 'bear' },
          { nom: 'Cerf', mot: 'deer stag' },
          { nom: 'Lion', mot: 'lion' },
          { nom: 'Tigre', mot: 'tiger' },
          { nom: 'Éléphant', mot: 'elephant' },
          { nom: 'Girafe', mot: 'giraffe' },
          { nom: 'Zèbre', mot: 'zebra' },
          { nom: 'Singe', mot: 'monkey', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Macaque_India_3.jpg/960px-Macaque_India_3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Hérisson', mot: 'hedgehog' },
          { nom: 'Baleine', mot: 'whale', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Baleine_%C3%A0_bosse_et_son_baleineau_2.jpg/960px-Baleine_%C3%A0_bosse_et_son_baleineau_2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Dauphin', mot: 'dolphin' },
          { nom: 'Chameau', mot: 'camel' },
          { nom: 'Koala', mot: 'koala' },
          { nom: 'Kangourou', mot: 'kangaroo' },
          { nom: 'Zébu', mot: 'zebu cattle' },
          { nom: 'Wapiti', mot: 'elk wapiti' },
          { nom: 'Wallaby', mot: 'wallaby' }
        ]
      },
      {
        id: 'oiseaux',
        nom: 'Oiseaux',
        icone: '🦉',
        elements: [
          { nom: 'Poule', mot: 'hen chicken', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Hen_with_chicks%2C_Raisen_district%2C_MP%2C_India.jpg/960px-Hen_with_chicks%2C_Raisen_district%2C_MP%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Coq', mot: 'rooster' },
          { nom: 'Canard', mot: 'duck' },
          { nom: 'Oie', mot: 'goose' },
          { nom: 'Pigeon', mot: 'pigeon', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Feral_Pigeon_Columba_livia%2C_Bangalore%2C_Karnataka%2C_India.jpg/960px-Feral_Pigeon_Columba_livia%2C_Bangalore%2C_Karnataka%2C_India.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Moineau', mot: 'sparrow', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Moineau_domestique_%28Passer_domesticus%29_%2814%29.jpg/960px-Moineau_domestique_%28Passer_domesticus%29_%2814%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Mésange', mot: 'blue tit bird' },
          { nom: 'Merle', mot: 'blackbird' },
          { nom: 'Hirondelle', mot: 'swallow bird' },
          { nom: 'Corbeau', mot: 'crow' },
          { nom: 'Pie', mot: 'magpie' },
          { nom: 'Hibou', mot: 'owl', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Hibou_des_marais.jpg/960px-Hibou_des_marais.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Aigle', mot: 'eagle' },
          { nom: 'Mouette', mot: 'seagull' },
          { nom: 'Cygne', mot: 'swan' },
          { nom: 'Paon', mot: 'peacock' },
          { nom: 'Perroquet', mot: 'parrot' },
          { nom: 'Pingouin', mot: 'penguin', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sander-pinguins.jpg/960px-Sander-pinguins.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Autruche', mot: 'ostrich', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Autruche_d%27Afrique_%28Struthio_camelus%29_%282%29.jpg/960px-Autruche_d%27Afrique_%28Struthio_camelus%29_%282%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Flamant rose', mot: 'flamingo' },
          { nom: 'Cigogne', mot: 'stork' },
          { nom: 'Colibri', mot: 'hummingbird' }
        ]
      },
      {
        id: 'poissons',
        nom: 'Poissons',
        icone: '🐟',
        elements: [
          { nom: 'Poisson rouge', mot: 'goldfish', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Carassius_wild_golden_fish_2013_G1.jpg/960px-Carassius_wild_golden_fish_2013_G1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Truite', mot: 'trout', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Trout.jpg/960px-Trout.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Saumon', mot: 'salmon fish', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Pink_salmon_FWS.jpg/960px-Pink_salmon_FWS.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Sardine', mot: 'sardine', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Sardina_pilchardus_Gervais.jpg/960px-Sardina_pilchardus_Gervais.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Thon', mot: 'tuna fish', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Tuna_assortment.png/960px-Tuna_assortment.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Requin', mot: 'shark' },
          { nom: 'Raie', mot: 'stingray' },
          { nom: 'Anguille', mot: 'eel' },
          { nom: 'Carpe', mot: 'carp fish' },
          { nom: 'Brochet', mot: 'pike fish', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Esox_lucius1.jpg/960px-Esox_lucius1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Morue', mot: 'cod fish' },
          { nom: 'Sole', mot: 'sole fish' },
          { nom: 'Hippocampe', mot: 'seahorse' },
          { nom: 'Poisson-clown', mot: 'clownfish' },
          { nom: 'Espadon', mot: 'swordfish', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Xiphias_gladius1.jpg/960px-Xiphias_gladius1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Perche', mot: 'perch fish' },
          { nom: 'Maquereau', mot: 'mackerel', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Scomber_scombrus.jpg/960px-Scomber_scombrus.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Rouget', mot: 'red mullet fish', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Mullus_surmuletus.jpg/960px-Mullus_surmuletus.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' }
        ]
      },
      {
        id: 'insectes',
        nom: 'Insectes',
        icone: '🐞',
        elements: [
          { nom: 'Abeille', mot: 'bee' },
          { nom: 'Guêpe', mot: 'wasp' },
          { nom: 'Papillon', mot: 'butterfly' },
          { nom: 'Coccinelle', mot: 'ladybug' },
          { nom: 'Fourmi', mot: 'ant' },
          { nom: 'Mouche', mot: 'housefly', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Housefly_on_a_leaf_crop.jpg/960px-Housefly_on_a_leaf_crop.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Moustique', mot: 'mosquito' },
          { nom: 'Libellule', mot: 'dragonfly' },
          { nom: 'Sauterelle', mot: 'grasshopper' },
          { nom: 'Criquet', mot: 'locust insect', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Italian_locust_%28Calliptamus_italicus%29_female.jpg/960px-Italian_locust_%28Calliptamus_italicus%29_female.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Scarabée', mot: 'beetle', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Cetonia-aurata.jpg/960px-Cetonia-aurata.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Chenille', mot: 'caterpillar' },
          { nom: 'Araignée', mot: 'spider' },
          { nom: 'Escargot', mot: 'snail' },
          { nom: 'Ver de terre', mot: 'earthworm' },
          { nom: 'Grillon', mot: 'cricket insect' },
          { nom: 'Mante religieuse', mot: 'praying mantis' },
          { nom: 'Bourdon', mot: 'bumblebee', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bombus_terrestris_queen_-_Tilia_cordata_-_Keila.jpg/960px-Bombus_terrestris_queen_-_Tilia_cordata_-_Keila.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' }
        ]
      },
      {
        id: 'reptiles',
        nom: 'Reptiles',
        icone: '🦎',
        elements: [
          { nom: 'Serpent', mot: 'snake' },
          { nom: 'Lézard', mot: 'lizard', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bosc%27s_fringe-toed_lizard_%28Acanthodactylus_boskianus_asper%29_juvenile.jpg/960px-Bosc%27s_fringe-toed_lizard_%28Acanthodactylus_boskianus_asper%29_juvenile.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Tortue', mot: 'turtle', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Green_sea_turtle_%28Chelonia_mydas%29_Moorea.jpg/960px-Green_sea_turtle_%28Chelonia_mydas%29_Moorea.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Crocodile', mot: 'crocodile', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Mugger_crocodile_%28Crocodylus_palustris%29_Gal_Oya.jpg/960px-Mugger_crocodile_%28Crocodylus_palustris%29_Gal_Oya.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Alligator', mot: 'alligator', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Alligator_mississippiensis_2_babies.jpg/960px-Alligator_mississippiensis_2_babies.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Caméléon', mot: 'chameleon', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Panther_chameleon_%28Furcifer_pardalis%29_male_Nosy_Be.jpg/960px-Panther_chameleon_%28Furcifer_pardalis%29_male_Nosy_Be.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Iguane', mot: 'iguana' },
          { nom: 'Gecko', mot: 'gecko' },
          { nom: 'Cobra', mot: 'cobra snake', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Naja_naja_cobra_a_lunettes_69.JPG/960px-Naja_naja_cobra_a_lunettes_69.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Python', mot: 'python snake' },
          { nom: 'Vipère', mot: 'viper snake', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Red-tailed_bamboo_pit_viper_in_Sundarbans_National_Park_October_2025_by_Tisha_Mukherjee_04.jpg/960px-Red-tailed_bamboo_pit_viper_in_Sundarbans_National_Park_October_2025_by_Tisha_Mukherjee_04.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Couleuvre', mot: 'grass snake' },
          { nom: 'Grenouille', mot: 'frog' },
          { nom: 'Crapaud', mot: 'toad', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Bufo_bufo_03-clean.jpg/960px-Bufo_bufo_03-clean.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
          { nom: 'Salamandre', mot: 'salamander', imageOverride: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Salamandra_salamandra_MHNT_1.jpg/960px-Salamandra_salamandra_MHNT_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail' },
        ]
      }
    ]
  }
];

/* Aplatit toutes les catégories/sous-catégories en une liste d'éléments
   { nom, mot, categorieId, categorieNom } — utilisé par le Quizz Alphabet. */
function tousLesElements() {
  const out = [];
  CATEGORIES.forEach(cat => {
    if (cat.elements) {
      cat.elements.forEach(e => out.push({ ...e, categorieId: cat.id, categorieNom: cat.nom }));
    }
    if (cat.sousCategories) {
      cat.sousCategories.forEach(sc => {
        sc.elements.forEach(e => out.push({ ...e, categorieId: sc.id, categorieNom: sc.nom }));
      });
    }
  });
  return out;
}

/* Normalise pour le matching alphabétique : "Étoile" -> "ETOILE" */
function sansAccents(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/Œ/g, 'OE').replace(/œ/g, 'oe')
    .replace(/Æ/g, 'AE').replace(/æ/g, 'ae')
    .toUpperCase();
}
