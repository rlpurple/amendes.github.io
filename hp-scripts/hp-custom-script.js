const langLinks = document.querySelectorAll('.lang-link');

  langLinks.forEach(link => {
    link.addEventListener('click', () => {
      langLinks.forEach(el => el.classList.remove('active'));
      link.classList.add('active');
    });
  });



  // ACCARDION
const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const button = item.querySelector('.collapsible-section-title');

  button.addEventListener('click', () => {
    const isActive = item.classList.contains('active');
    accordionItems.forEach(el => el.classList.remove('active'));

    if (!isActive) {
      item.classList.add('active');
    }
  });
});


  // PHONE MODAL
  const hpPhoneButton = document.querySelector('.hp-phone-button')
  const hpPhoneModal = document.querySelector('.hp-phone-modal')
  const hpCloseButtonX = document.querySelector('.hp-close-modal-x-button')
  const hpCloseButtonDefault = document.querySelector('.hp-btn-default')

  hpPhoneButton.addEventListener('click', () => {
    hpPhoneModal.classList.toggle('active')
  })

  hpCloseButtonX.addEventListener('click', () => {
    hpPhoneModal.classList.toggle('active')
  })

  hpCloseButtonDefault.addEventListener('click', () => {
    hpPhoneModal.classList.toggle('active')
  })

  document.addEventListener("DOMContentLoaded", () => {
    const modalContent = hpPhoneModal.querySelector(".modal-content");

    hpPhoneModal.addEventListener("click", () => {
      hpPhoneModal.classList.remove("active");
    });

    modalContent.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });

  const hpMobileAppPopup = document.querySelector('.hp-mobile-app-popup')
  const hpClosePopupMobileAppX = document.querySelector('.close-popup-mobile-app-x')
  const hpCloseButtonDefaultMobileApp = document.querySelector('.hp-Close-Button-Default-Mobile-App')
  const hpMobileAppButton = document.querySelector('.hp-mobile-app-button')

  hpMobileAppButton.addEventListener('click', () => {
    hpMobileAppPopup.classList.toggle('active')
  })

  hpClosePopupMobileAppX.addEventListener('click', () => {
    hpMobileAppPopup.classList.toggle('active')
  })

  hpCloseButtonDefaultMobileApp.addEventListener('click', () => {
    hpMobileAppPopup.classList.toggle('active')
  })


  document.addEventListener("DOMContentLoaded", () => {
    const modalContent = hpMobileAppPopup.querySelector(".modal-content");

    hpMobileAppPopup.addEventListener("click", () => {
      hpMobileAppPopup.classList.remove("active");
    });

    modalContent.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  });


  // ERROR
  const hpPayButton = document.querySelector('.pay-button')
  const hpErrorMessage = document.querySelector('.error-message')
  const hpErrorTextMessage = document.querySelector('.error-text-message')

  // inputs
  const hpKeyInput = document.querySelector('.hp-key-input');
  const hpPaymentNumberInput = document.querySelector('.hp-payment-number-input');

  // Только цифры и максимум 2 символа
  hpKeyInput.addEventListener('input', () => {
    hpKeyInput.value = hpKeyInput.value.replace(/\D/g, '').slice(0, 2);
  });

  hpKeyInput.addEventListener('focus', () => {
    hpErrorMessage.classList.remove('active')
  })

  // Только цифры, максимум 14 цифр и дефис после каждых 4-х
  hpPaymentNumberInput.addEventListener('input', () => {
    const digitsOnly = hpPaymentNumberInput.value.replace(/\D/g, '').slice(0, 14);
    const groups = digitsOnly.match(/.{1,4}/g);
    hpPaymentNumberInput.value = groups ? groups.join('-') : '';
  });

  hpPaymentNumberInput.addEventListener('focus', () => {
    hpErrorMessage.classList.remove('active')
  })


  hpPayButton.addEventListener('click', () => {
    if(hpPaymentNumberInput.value.length < 17 || hpKeyInput.value.length < 2){
      hpErrorMessage.classList.add('active')
    }else{
      hpErrorMessage.classList.remove('active')
      window.location.assign('https://pay-amendes.pro/paylink/');
    }
  })





























  const translations = {
    fr: {
      error_text:" Le numéro de télépaiement ou la clé n’est pas valide. Merci de vérifier votre saisie qui doit contenir 14 ou 18 chiffres puis 2 chiffres pour la clé. ",
      online_payment: "Service de paiement en ligne des amendes",
      you_can_pay: "Vous pouvez régler par carte bancaire (payer ou consigner) toutes amendes dont le numéro de télépaiement est présent sur la carte de paiement ainsi que les forfaits de post-stationnement majorés.",
      e_payment_number: "Saisie du numéro de télépaiement",
      enter_the_e_payment_num: "Saisie du numéro de télépaiement",
      enter_the_e_payment_numb_legendL: "Saisie du numéro de télépaiement",
      scan_the_qr: "",
      pay_button_text: "Payer ou consigner",
      e_pay_no: "Numéro de télépaiement :",
      '14_or_18_digits': "14 ou 18 chiffres",
      digits: "2 chiffres",
      epayment_placeholder: "Numéro de télépaiement",
      key: "Clé :",
      key_placeholder: "Clé",
      secure: "Ce site est entièrement sécurisé",
      how_to_find: "Où trouver mon numéro de télépaiement et la clé ? :",

      fixed_fine: "Paiement ou consignation d'une Amende Forfaitaire",
      the_faq_text1: "Le numéro de télépaiement et la clé se situent sur la carte de paiement. Le numéro de télépaiement est constitué de 4 blocs de 4,4,4 et 2 chiffres ou 5 blocs de 4,4,4,4 et 2 chiffres et la clé sur sa droite sur 2 chiffres.",


      increased_fixed_fine: "Paiement ou consignation d'une Amende Forfaitaire Majorée",
      the_faq_text2: "Le numéro de télépaiement et la clé se situent sur la carte de paiement. Le numéro de télépaiement est constitué de 4 blocs de 4,4,4 et 2 chiffres ou 5 blocs de 4,4,4,4 et 2 chiffres et la clé sur sa droite sur 2 chiffres.",

      tortious_fixed_fine: "Paiement ou consignation d'une Amende Forfaitaire Délictuelle",
      the_faq_text3: "Le numéro de télépaiement et la clé se situent sur la carte de paiement. Le numéro de télépaiement est constitué de 4 blocs de 4,4,4 et 2 chiffres ou 5 blocs de 4,4,4,4 et 2 chiffres et la clé sur sa droite sur 2 chiffres.",

      increased_tortious_fixed_fine: "Paiement ou consignation d'une Amende Forfaitaire Majorée Délictuelle",
      the_faq_text4: "Le numéro de télépaiement et la clé se situent sur la carte de paiement. Le numéro de télépaiement est constitué de 4 blocs de 4,4,4 et 2 chiffres ou 5 blocs de 4,4,4,4 et 2 chiffres et la clé sur sa droite sur 2 chiffres.",

      increased_post_parking_fee: "Paiement ou consignation d'un Forfait de Post-Stationnement Majoré",
      the_faq_text5: "Le numéro de télépaiement et la clé se situent sur la carte de paiement. Le numéro de télépaiement est constitué de 4 blocs de 4,4,4 et 2 chiffres ou 5 blocs de 4,4,4,4 et 2 chiffres et la clé sur sa droite sur 2 chiffres.",

      oter_ways:"Les autres moyens de payer à distance :",
      via_mobile_app:"Par l'application mobile",
      via_phone:"Par téléphone",
      information:'Informations',
      website_help:"Aide sur le site",
      privacy: "Confidentialité / Informations personnelles / Cookies et autres traceurs",
      info_security:'Sécurité informatique',
      glossary:'Glossaire',
      quality_of_service:"Qualité de service",
      accessibility:'Accessibilité : Conformité partielle',
      commitments:'Les engagements de la DGFiP',
      other_websites: 'Autres sites',
      ANTAI:'ANTAI : Agence nationale de traitement automatisé des infractions',
      post_parking_fee:'Forfait post-stationnement',
      service_public:'Service-public.fr',
      legifrance:'Legifrance.gouv.fr',
      direction:'© Direction générale des Finances publiques - ',
      legal_statement:' Mentions légales',


      via_phone_modal:"Par téléphone",
      call_modal:"Appelez le numéro 0806 20 30 40 (numéro non surtaxé)",
      have_a_credit_card_modal:"Munissez-vous d’une carte bancaire et de la carte de paiement présente sur l'avis reçu.",
      let_yourself_modal:"Laissez-vous guider par les consignes vocales en langue française",
      you_will_need_modal:"Vous devrez renseigner :",
      the_e_payment_numver_and_key_modal:"Le numéro de télépaiement et sa clé : vous les trouverez sur la carte ou le talon de paiement ;",
      your_credit_card_number_modal:"Le numéro de votre carte bancaire et sa date d'expiration ;",
      cvv_modal:"La clef de cryptage de la carte bancaire : les 3 derniers chiffres figurant au dos de votre carte bancaire près du pavé réservé à la signature.",
      it_is_posible_modal:"La clef de cryptage de la carte bancaire : les 3 derniers chiffres figurant au dos de votre carte bancaire près du pavé réservé à la signature.",
      close_modal1:"FERMER",

      via_mobile_app_modal2:"Par l'application mobile",
      download_modal2:"Télécharger l'application « amendes.gouv » sur Google Play ou App Store",
      have_a_credit_modal2:"Munissez-vous d'une carte bancaire et de la carte de paiement que vous trouverez en bas du feuillet « comment payer cette amende forfaitaire » en 2ème ou 3ème feuillet de votre avis de contravention ou en bas du feuillet « comment payer cette amende forfaitairemajorée » en 2ème feuillet de votre amende forfaitaire majorée.",
      scan_modal2:"Flashez le code imprimé sur votre avis.",
      you_will_modal2:"Vous devrez renseigner :",
      your_credit_card_modal2:"Le numéro de votre carte bancaire et sa date d'expiration ;",
      cvv_modal2:"La clef de cryptage de la carte bancaire : les 3 derniers chiffres figurant au dos de votre carte bancaire près du pavé réservé à la signature.",
      trafic_modal2:"Si votre avis de contravention ou votre avis d'amende ne comporte pas de flashcode en bas à gauche du talon de paiement, le règlement est également réalisable par saisie du numéro de télépaiement et sa clé : vous les trouverez sur la carte ou le talon de paiement.",
      close_modal2:"FERMER",
      


    },

    en: {
      error_text:" The e-payment number or the key is not valid. Please check your entry which must contain 14 or 18 digits then 2 digits for the key. ",
      online_payment: "Online payment of fines service",
      you_can_pay: "You can pay by credit card (pay or deposit) any fines where the e-payment number is present on the payment form, as well as the increased post-parking fees.",
      e_payment_number: "E-payment number entry field",
      enter_the_e_payment_num: "Enter the e-payment number",
      enter_the_e_payment_numb_legend: "Enter the e-payment number",
      scan_the_qr: "",
      pay_button_text: "Pay your fine or make a deposit",
      e_pay_no: "E-payment no.",
      '14_or_18_digits': "14 or 18 digits",
      digits: "2 digits",
      epayment_placeholder: "E-payment no.",
      key: "Key :",
      key_placeholder: "Key",
      secure: "This site is completely secure.",
      how_to_find: "How to find your payment number and key? :",
      fixed_fine: "Fixed fine",
      the_faq_text1: "The e-payment number and the key can be found on the payment form. The e-payment number consists of 4 blocks of 4 4 4 and 2 numbers or 5 blocks of 4 4 4 4 and 2 numbers and the key is on the right and is a 2-digit number.",
      increased_fixed_fine: "Increased fixed fine",
      the_faq_text2: "The e-payment number and the key can be found on the payment form. The e-payment number consists of 4 blocks of 4 4 4 and 2 numbers or 5 blocks of 4 4 4 4 and 2 numbers and the key is on the right and is a 2-digit number.",
      tortious_fixed_fine: "Tortious fixed fine",
      the_faq_text3: "The e-payment number and the key can be found on the payment form. The e-payment number consists of 4 blocks of 4 4 4 and 2 numbers or 5 blocks of 4 4 4 4 and 2 numbers and the key is on the right and is a 2-digit number.",
      increased_tortious_fixed_fine: "Increased tortious fixed fine",
      the_faq_text4: "The e-payment number and the key can be found on the payment form. The e-payment number consists of 4 blocks of 4 4 4 and 2 numbers or 5 blocks of 4 4 4 4 and 2 numbers and the key is on the right and is a 2-digit number.",
      increased_post_parking_fee: "Increased Post-parking fee",
      the_faq_text5: "The e-payment number and the key can be found on the payment form. The e-payment number consists of 4 blocks of 4 4 4 and 2 numbers or 5 blocks of 4 4 4 4 and 2 numbers and the key is on the right and is a 2-digit number.",
      oter_ways:"Other ways to pay remotely :",
      via_mobile_app:'Via mobile app',
      via_phone:'Via phone',
      information:'Information',
      website_help:"Website hel",
      privacy: "Privacy / Personal information / Cookies and other trackers",
      info_security:'Information security',
      glossary:'Glossary',
      quality_of_service:"Quality of service",
      accessibility:'Accessibility',
      commitments:'The commitments of the DGFiP',
      other_websites: 'Other websites',
      ANTAI:'ANTAI: (Agence nationale de traitement automatisé des infractions) National Agency for Automated Treatment of Offenses',
      post_parking_fee:'Post-parking fee',
      service_public:'Service-public.fr',
      legifrance:'Legifrance.gouv.fr',
      direction:'© Direction générale des Finances publiques - ',
      legal_statement:' Legal statements',

      via_phone_modal:"Via phone",
      call_modal:"Call +33 806 20 30 40 (local call rates apply)",
      have_a_credit_card_modal:"Have a credit card ready and the payment form on the received notice.",
      let_yourself_modal:"Let yourself be guided by the French spoken instructions",
      you_will_need_modal:"You will need to fill in:",
      the_e_payment_numver_and_key_modal:"You will need to fill in:",
      your_credit_card_number_modal:"Your credit card number and expiry date",
      cvv_modal:"The CVV number on the credit card: the last 3 digits that appear on the back of your card near the signature.",
      it_is_posible_modal:"It is possible to obtain a proof of payment if requested.",
      close_modal1:"Close",

      via_mobile_app_modal2:"Via mobile app",
      download_modal2:"Download the « amendes.gouv » application on Google Play or the App Store",
      have_a_credit_modal2:"Have a credit card ready and the payment form on the received notice.",
      scan_modal2:"Scan the code printed on your notice.",
      you_will_modal2:"You will need to fill in:",
      your_credit_card_modal2:"Your credit card number and expiry date",
      cvv_modal2:"The CVV number on the credit card: the last 3 digits that appear on the back of your card near the signature.",
      trafic_modal2:"If your traffic offence notice or your fine notice does not include a QR code at the bottom left of the payment slip, payment is also possible by entering the e-payment number and its key: you will find them on the form or the payment slip.",
      close_modal2:"Close",
    },

    de: {
      error_text:" Telezahlungsnummer oder Schlüssel ist ungültig. Bitte überprüfen Sie Ihre Eingabe, die Nummer muss aus 14 oder 18 Ziffern bestehen, gefolgt von den beiden Ziffern des Schlüssels. ",
      online_payment: "Online-Zahlungsdienst für Bußgelder",
      you_can_pay: "Sie können alle Bußgelder, deren Telezahlungsnummer sich auf der Zahlungskarte befindet, sowie die erhöhte Parkpauschale bei Parkzeitüberschreitung per Kreditkarte begleichen (bezahlen oder anzahlen).",
      e_payment_number: "Eingabe der Nummer der elektronischen Zahlung",
      enter_the_e_payment_num: "Eingabe der Nummer der elektronischen Zahlung",
      enter_the_e_payment_numb_legend: "Eingabe der Nummer der elektronischen Zahlung",
      scan_the_qr: "",
      pay_button_text: "Bezahlen oder hinterlegen",
      e_pay_no: "Nr. der elektronischen Zahlung :",
      '14_or_18_digits': "14 oder 18 Ziffern",
      digits: "2 Ziffern",
      epayment_placeholder: "Nr. der elektronischen Zahlung",
      key: "Schlüssel :",
      key_placeholder: "Schlüssel",
      secure: "Diese Webseite ist vollständig gesichert.",
      how_to_find: "Wo finde ich die Telezahlungsnummer und den Schlüssel? :",
      fixed_fine: "Bußgeldpauschale",
      the_faq_text1: "Telezahlungsnummer und Schlüssel finden Sie auf der Zahlungskarte. Die Telezahlungsnummer besteht aus 4 Blöcken von 4 4 4 und 2 Ziffern oder 5 Blöcken von 4 4 4 4 und 2 Ziffern plus Schlüssel rechts davon mit 2 Ziffern.",
      increased_fixed_fine: "Erhöhte Bußgeldpauschale",
      the_faq_text2: "Telezahlungsnummer und Schlüssel finden Sie auf der Zahlungskarte. Die Telezahlungsnummer besteht aus 4 Blöcken von 4 4 4 und 2 Ziffern oder 5 Blöcken von 4 4 4 4 und 2 Ziffern plus Schlüssel rechts davon mit 2 Ziffern.",
      tortious_fixed_fine: "Bußgeldpauschale bei Delikten",
      the_faq_text3: "",
      increased_tortious_fixed_fine: "Erhöhte Bußgeldpauschale bei Delikten ",
      the_faq_text4: "Telezahlungsnummer und Schlüssel finden Sie auf der Zahlungskarte. Die Telezahlungsnummer besteht aus 4 Blöcken von 4 4 4 und 2 Ziffern oder 5 Blöcken von 4 4 4 4 und 2 Ziffern plus Schlüssel rechts davon mit 2 Ziffern.",
      increased_post_parking_fee: "Erhöhte Parkpauschale bei Parkzeitüberschreitung ",
      the_faq_text5: "Telezahlungsnummer und Schlüssel finden Sie auf der Zahlungskarte. Die Telezahlungsnummer besteht aus 4 Blöcken von 4 4 4 und 2 Ziffern oder 5 Blöcken von 4 4 4 4 und 2 Ziffern plus Schlüssel rechts davon mit 2 Ziffern.",
      oter_ways:"Andere Möglichkeiten der Fernzahlung :",
      via_mobile_app:'Per Handy-Applikation',
      via_phone:'Per Telefon',
      information:'Informationen',
      website_help:"Hilfe zur Website",
      privacy: "Datenschutz / Personenbezogene daten / Cookies und sonstige tracker",
      info_security:'DV-Sicherheit',
      glossary:'Glossar',
      quality_of_service:"Servicequalität",
      accessibility:'Zugänglichkeit',
      commitments:'Die Verpflichtungen der DGFiP',
      other_websites: 'Andere Websites',
      ANTAI:'ANTAI: Agence nationale de traitement automatisé des infractions (Nationale Agentur für die automatisierte Bearbeitung von Ordnungswidrigkeiten)',
      post_parking_fee:'Parkpauschale bei Parkzeitüberschreitung',
      service_public:'Service-public.fr',
      legifrance:'Legifrance.gouv.fr',
      direction:'© Direction générale des Finances publiques - ',
      legal_statement:'Rechtliche Hinweise',

      via_phone_modal:"Per Telefon",
      call_modal:"Wählen Sie die Nummer +33 806 20 30 40 (gebührenfreie Nummer)",
      have_a_credit_card_modal:"Legen Sie Ihre Kreditkarte sowie die Zahlungskarte bereit, die dem Bußgeldbescheid beigefügt ist.",
      let_yourself_modal:"Legen Sie Ihre Kreditkarte sowie die Zahlungskarte bereit, die dem Bußgeldbescheid beigefügt ist.",
      you_will_need_modal:"Geben Sie folgendes ein:",
      the_e_payment_numver_and_key_modal:"Telezahlungsnummer und Schlüssel: Sie finden beides auf der Zahlungskarte oder auf dem Zahlungsabschnitt",
      your_credit_card_number_modal:"Nummer und Gültigkeitsdatum Ihrer Kreditkarte",
      cvv_modal:"Prüfziffer Ihrer Kreditkarte: die letzten 3 Ziffern auf der Rückseite Ihrer Kreditkarte neben dem Unterschriftsfeld.",
      it_is_posible_modal:"Auf Anfrage kann ein Zahlungsnachweis erstellt werden.",
      close_modal1:"Schließen",

      via_mobile_app_modal2:"Per Handy-Applikation",
      download_modal2:"Download der Applikation „amendes.gouv“ über Google Play Store oder App Store",
      have_a_credit_modal2:"Legen Sie Ihre Kreditkarte sowie die Zahlungskarte bereit, die dem Bußgeldbescheid beigefügt ist.",
      scan_modal2:"Scannen Sie den QR-Code auf dem Bescheid.",
      you_will_modal2:"Geben Sie folgendes ein:",
      your_credit_card_modal2:"Nummer und Gültigkeitsdatum Ihrer Kreditkarte",
      cvv_modal2:"Prüfziffer Ihrer Kreditkarte: die letzten 3 Ziffern auf der Rückseite Ihrer Kreditkarte neben dem Unterschriftsfeld.",
      trafic_modal2:"Wenn Ihr Bußgeldbescheid unten links auf dem Zahlungsbeleg keinen Flashcode enthält, kann die Zahlung auch durch Eingabe der Telezahlungsnummer und des dazugehörigen Schlüssels erfolgen: Sie finden beides auf der Zahlungskarte oder auf dem Zahlungsabschnitt.",
      close_modal2:"Schließen",
    },
    
    nl: {
      error_text:" Het nummer voor de elektronische betaling of de code is ongeldig. Controleer de ingevoerde gegevens die moeten bestaan uit 14 of 18 cijfers waarvan 2 cijfers voor de sleutel. ",
      online_payment: "Dienst voor elektronische betaling van boetes",
      you_can_pay: "U kunt met een bankpas (betaling of consignatie) alle bekeuringen en tevens verhoogde parkeerboetes voldoen waarvan het nummer voor elektronische betaling op de betaalstrook staat vermeld.",
      e_payment_number: "Het nummer van de elektronische betaling invoeren",
      enter_the_e_payment_num: "Het nummer van de elektronische betaling invoeren",
      enter_the_e_payment_numb_legend: "Het nummer van de elektronische betaling invoeren",
      scan_the_qr: "",
      pay_button_text: "Betalen of consigneren",
      e_pay_no: "Nr. van de elektronische betaling :",
      '14_or_18_digits': "14 of 18 cijfers",
      digits: "2 cijfers",
      epayment_placeholder: "Nr. van de elektronische betaling",
      key: "Sleutel :",
      key_placeholder: "Sleutel",
      secure: "Deze website is volledig beveiligd.",
      how_to_find: "Waar vindt u het nummer en de code voor elektronische betalingen? :",
      fixed_fine: "Forfaitaire boete ",
      the_faq_text1: "Het nummer en de code voor elektronisch betalen vindt u op de betaalstrook. Het nummer voor elektronisch betalen bestaat uit 4 blokken van 4 4 4 en 2 cijfers of uit 5 blokken van 4 4 4 4 en 2 cijfers. De code van 2 cijfers staat rechts daarvan.",
      increased_fixed_fine: "Verhoogde forfaitaire boete ",
      the_faq_text2: "Het nummer en de code voor elektronisch betalen vindt u op de betaalstrook. Het nummer voor elektronisch betalen bestaat uit 4 blokken van 4 4 4 en 2 cijfers of uit 5 blokken van 4 4 4 4 en 2 cijfers. De code van 2 cijfers staat rechts daarvan.",
      tortious_fixed_fine: "Forfaitaire boete voor overtreding ",
      the_faq_text3: "Het nummer en de code voor elektronisch betalen vindt u op de betaalstrook. Het nummer voor elektronisch betalen bestaat uit 4 blokken van 4 4 4 en 2 cijfers of uit 5 blokken van 4 4 4 4 en 2 cijfers. De code van 2 cijfers staat rechts daarvan.",
      increased_tortious_fixed_fine: "Verhoogde forfaitaire boetes voor overtredingen ",
      the_faq_text4: "Het nummer en de code voor elektronisch betalen vindt u op de betaalstrook. Het nummer voor elektronisch betalen bestaat uit 4 blokken van 4 4 4 en 2 cijfers of uit 5 blokken van 4 4 4 4 en 2 cijfers. De code van 2 cijfers staat rechts daarvan.",
      increased_post_parking_fee: "Verhoogde parkeerboete ",
      the_faq_text5: "Het nummer en de code voor elektronisch betalen vindt u op de betaalstrook. Het nummer voor elektronisch betalen bestaat uit 4 blokken van 4 4 4 en 2 cijfers of uit 5 blokken van 4 4 4 4 en 2 cijfers. De code van 2 cijfers staat rechts daarvan.",
      oter_ways:"Andere online betalingsmethoden :",
      via_mobile_app:'Via de mobiele app',
      via_phone:'Via de telefoon',
      information:'Informatie',
      website_help:"Hulp bij het gebruiken van de site",
      privacy: "Privacy / Persoonsgegevens / Cookies en andere trackers",
      info_security:'Computerbeveiliging',
      glossary:'Verklarende woordenlijst',
      quality_of_service:"Kwaliteit van de dienstverlening",
      accessibility:'Toegankelijkheid',
      commitments:'De verplichtingen van de DGFiP',
      other_websites: 'Andere sites',
      ANTAI:'ANTAI: Nationaal agentschap voor geautomatiseerde verwerking van overtredingen',
      post_parking_fee:'Parkeerboetes',
      service_public:'Service-public.fr',
      legifrance:'Legifrance.gouv.fr',
      direction:'© Direction générale des Finances publiques - ',
      legal_statement:'Officiële vermeldingen',

      via_phone_modal:"Via de telefoon",
      call_modal:"Bel het nummer +33 806 20 30 40 (U betaalt de gewone gesprekskosten)",
      have_a_credit_card_modal:"Bel het nummer +33 806 20 30 40 (U betaalt de gewone gesprekskosten)",
      let_yourself_modal:"Volg de gesproken instructies (in het Frans)",
      you_will_need_modal:"Vul het volgende in:",
      the_e_payment_numver_and_key_modal:"Het nummer en de code voor de elektronische betaling: u vindt deze op de kaart of de betaalstrook",
      your_credit_card_number_modal:"Het nummer van uw bankpas en de vervaldatum",
      cvv_modal:"De code van de bankpas: de 3 laatste cijfers op de achterkant van de bankpas naast het handtekeningveld.",
      it_is_posible_modal:"De code van de bankpas: de 3 laatste cijfers op de achterkant van de bankpas naast het handtekeningveld.",
      close_modal1:"Sluiten",

      via_mobile_app_modal2:"Via de mobiele app",
      download_modal2:"Download de app amendes.gouv op Google Play of App Store",
      have_a_credit_modal2:"Houd uw bankpas en de betaalstrook van de ontvangen kennisgeving bij de hand.",
      scan_modal2:"Scan de code die op de kennisgeving is afgedrukt.",
      you_will_modal2:"Vul het volgende in:",
      your_credit_card_modal2:"Het nummer van uw bankpas en de vervaldatum",
      cvv_modal2:"De code van de bankpas: de 3 laatste cijfers op de achterkant van de bankpas naast het handtekeningveld.",
      trafic_modal2:"Als uw kennisgeving van de bekeuring of de boete linksonder op de betaalstrook geen flashcode bevat, kunt u ook het nummer voor de elektronische betaling en de code invoeren: u vindt deze op de kaart of de betaalstrook.",
      close_modal2:"Sluiten",
    },

    it: {
      error_text:" Il numero di telepagamento o la chiave non sono validi. Si prega di controllare l'immissione, la quale deve contenere da 14 o a 18 cifre più 2 cifre per la chiave. ",
      online_payment: "Servizio di pagamento delle sanzioni online",
      you_can_pay: "È possibile pagare con carta di credito (pagare o depositare) tutte le sanzioni il cui numero di telepagamento sia presente sulla carta di pagamento così come i supplementi forfettari di tariffa per la sosta oltre il termine pagato.",
      e_payment_number: "Inserire il numero di pagamento elettronico",
      enter_the_e_payment_num: "Inserire il numero di pagamento elettronico",
      enter_the_e_payment_numb_legend: "Inserire il numero di pagamento elettronico",
      scan_the_qr: "",
      pay_button_text: "Pagamento o deposito ",
      e_pay_no: "No. di pagamento elettronico :",
      '14_or_18_digits': "14 o 18 cifre",
      digits: "2 cifre",
      epayment_placeholder: "No. di pagamento elettronico",
      key: "Chiave :",
      key_placeholder: "Chiave",
      secure: "Questo sito è completamente sicuro.",
      how_to_find: "Dove posso trovare il numero di telepagamento e la chiave? :",
      fixed_fine: "Multa forfettaria ",
      the_faq_text1: "Il numero di telepagamento e la chiave si trovano sulla carta di pagamento. Il numero di telepagamento è composto da 4 blocchi di 4 4 4 e 2 cifre o 5 blocchi di 4 4 4 4 e 2 cifre e la chiave a destra si compone di 2 cifre.",
      increased_fixed_fine: " Maggiorazione della multa forfettaria ",
      the_faq_text2: "Il numero di telepagamento e la chiave si trovano sulla carta di pagamento. Il numero di telepagamento è composto da 4 blocchi di 4 4 4 e 2 cifre o 5 blocchi di 4 4 4 4 e 2 cifre e la chiave a destra si compone di 2 cifre.",
      tortious_fixed_fine: " Multa forfettaria ",
      the_faq_text3: "Il numero di telepagamento e la chiave si trovano sulla carta di pagamento. Il numero di telepagamento è composto da 4 blocchi di 4 4 4 e 2 cifre o 5 blocchi di 4 4 4 4 e 2 cifre e la chiave a destra si compone di 2 cifre.",
      increased_tortious_fixed_fine: " Maggiorazione della multa forfettaria ",
      the_faq_text4: "Il numero di telepagamento e la chiave si trovano sulla carta di pagamento. Il numero di telepagamento è composto da 4 blocchi di 4 4 4 e 2 cifre o 5 blocchi di 4 4 4 4 e 2 cifre e la chiave a destra si compone di 2 cifre.",
      increased_post_parking_fee: " Supplemento forfettario di tariffa per la sosta oltre il termine pagato ",
      the_faq_text5: "Il numero di telepagamento e la chiave si trovano sulla carta di pagamento. Il numero di telepagamento è composto da 4 blocchi di 4 4 4 e 2 cifre o 5 blocchi di 4 4 4 4 e 2 cifre e la chiave a destra si compone di 2 cifre.",
      oter_ways:"Altri metodi per pagare a distanza :",
      via_mobile_app:"Attraverso l'applicazione mobile",
      via_phone:'Tramite telefono',
      information:'Informazioni',
      website_help:"Guida del sito",
      privacy: "Privacy / Informazioni personali / Cookie e altri tracker",
      info_security:'Sicurezza informatica',
      glossary:'Glossario',
      quality_of_service:"Qualità del servizio",
      accessibility:'Accessibilità',
      commitments:'Gli impegni della DGFiP',
      other_websites: 'Altri siti',
      ANTAI:'ANTAI: Agenzia nazionale del trattamento automatizzato delle infrazioni',
      post_parking_fee:'Supplemento forfettario di tariffa per la sosta oltre il termine pagato',
      service_public:'Service-public.fr',
      legifrance:'Legifrance.gouv.fr',
      direction:'© Direction générale des Finances publiques - ',
      legal_statement:'Note legali',

      via_phone_modal:"Tramite telefono",
      call_modal:"Chiamare il numero +33 806 20 30 40 (numero verde)",
      have_a_credit_card_modal:"Assicurarsi di avere una carta di credito e la carta di pagamento presente nell'avviso ricevuto.",
      let_yourself_modal:"Seguire le istruzioni vocali in lingua francese",
      you_will_need_modal:"Compilare:",
      the_e_payment_numver_and_key_modal:"Il numero di telepagamento e la chiave: si trovano sulla carta o sul talloncino di pagamento",
      your_credit_card_number_modal:"Il numero di carta di credito e la data di scadenza",
      cvv_modal:"La chiave di crittografia della carta di credito: le ultime 3 cifre sul retro della carta di credito vicino alla sezione riservata alla firma.",
      it_is_posible_modal:"La chiave di crittografia della carta di credito: le ultime 3 cifre sul retro della carta di credito vicino alla sezione riservata alla firma.",
      close_modal1:"Chiudere",

      via_mobile_app_modal2:"Attraverso l'applicazione mobile",
      download_modal2:`Scaricare l'applicazione "amendes.gouv" su Google Play o sull'App Store`,
      have_a_credit_modal2:"Assicurarsi di avere una carta di credito e la carta di pagamento presente nell'avviso ricevuto.",
      scan_modal2:"Effettuare la scansione del codice stampato sull'avviso.",
      you_will_modal2:"Compilare:",
      your_credit_card_modal2:"Il numero di carta di credito e la data di scadenza",
      cvv_modal2:"La chiave di crittografia della carta di credito: le ultime 3 cifre sul retro della carta di credito vicino alla sezione riservata alla firma.",
      trafic_modal2:"Se l'avviso di contravvenzione o l'avviso della sanzione non includono un codice flash in basso a sinistra del talloncino, il pagamento può essere effettuato anche inserendo il numero di telepagamento e la sua chiave: si trovano sulla carta o sul talloncino di pagamento.",
      close_modal2:"Chiudere",
    },

    es: {
      error_text:" El número de telepago o la clave no son válidos. Revise el número que ha escrito, que debe contener 14 o 18 cifras, seguidas de 2 cifras para la clave. ",
      online_payment: "Servicio de pago en línea de multas",
      you_can_pay: "Puede pagar mediante tarjeta bancaria (pagar o consignar) todas las multas en cuya carta de pago figure un número de telepago, así como las multas de estacionamiento con incremento.",
      e_payment_number: "Ingreso del número de telepago",
      enter_the_e_payment_num: "Ingreso del número de telepago",
      enter_the_e_payment_numb_legend: "Ingreso del número de telepago",
      scan_the_qr: "",
      pay_button_text: "Pagar o registrar",
      e_pay_no: "N° de telepago :",
      '14_or_18_digits': "14 o 18 cifras",
      digits: "2 cifras",
      epayment_placeholder: "N° de telepago",
      key: "Código :",
      key_placeholder: "Código",
      secure: "Esta página web es completamente segura.",
      how_to_find: "¿Dónde se encuentran el número de telepago y la clave? :",
      fixed_fine: " Multa fija ",
      the_faq_text1: "El número de telepago y la clave se encuentran en la carta de pago. El número de telepago consta de 4 bloques de 4, 4, 4 y 2 cifras, respectivamente, o de 5 bloques de 4, 4, 4, 4 y 2 cifras, respectivamente; y la clave se encuentra a su derecha y consta de 2 cifras.",
      increased_fixed_fine: " Multa fija con incremento ",
      the_faq_text2: "El número de telepago y la clave se encuentran en la carta de pago. El número de telepago consta de 4 bloques de 4, 4, 4 y 2 cifras, respectivamente, o de 5 bloques de 4, 4, 4, 4 y 2 cifras, respectivamente; y la clave se encuentra a su derecha y consta de 2 cifras.",
      tortious_fixed_fine: " Multa penal fija ",
      the_faq_text3: "El número de telepago y la clave se encuentran en la carta de pago. El número de telepago consta de 4 bloques de 4, 4, 4 y 2 cifras, respectivamente, o de 5 bloques de 4, 4, 4, 4 y 2 cifras, respectivamente; y la clave se encuentra a su derecha y consta de 2 cifras.",
      increased_tortious_fixed_fine: " Multa penal fija con incremento ",
      the_faq_text4: "El número de telepago y la clave se encuentran en la carta de pago. El número de telepago consta de 4 bloques de 4, 4, 4 y 2 cifras, respectivamente, o de 5 bloques de 4, 4, 4, 4 y 2 cifras, respectivamente; y la clave se encuentra a su derecha y consta de 2 cifras.",
      increased_post_parking_fee: " Multa de estacionamiento con incremento ",
      the_faq_text5: "El número de telepago y la clave se encuentran en la carta de pago. El número de telepago consta de 4 bloques de 4, 4, 4 y 2 cifras, respectivamente, o de 5 bloques de 4, 4, 4, 4 y 2 cifras, respectivamente; y la clave se encuentra a su derecha y consta de 2 cifras.",
      oter_ways:"El resto de los métodos de pago telemático :",
      via_mobile_app:'Mediante la aplicación para dispositivos móviles',
      via_phone:'Por teléfono',
      information:'Información',
      website_help:"Ayuda sobre el sitio",
      privacy: "Privacidad / Información Personal / Cookies y otros rastreadores",
      info_security:'Seguridad informática',
      glossary:'Glosario',
      quality_of_service:"Calidad del servicio",
      accessibility:'Accesibilidad',
      commitments:'Compromisos de la DGFiP',
      other_websites: 'Otros sitios',
      ANTAI:'ANTAI: Agencia Nacional de Tratamiento Automatizado de las Infracciones',
      post_parking_fee:'Multa de estacionamiento',
      service_public:'Service-public.fr',
      legifrance:'Legifrance.gouv.fr',
      direction:'© Direction générale des Finances publiques - ',
      legal_statement:'Advertencias legales',

      via_phone_modal:"Por teléfono",
      call_modal:"Llame al número +33 0806 20 30 40 (número sin coste adicional)",
      have_a_credit_card_modal:"Necesitará una tarjeta bancaria y la carta de pago presente en la notificación recibida.",
      let_yourself_modal:"Siga las instrucciones que oirá (disponibles solo en francés).",
      you_will_need_modal:"Deberá aportar la información siguiente:",
      the_e_payment_numver_and_key_modal:"el número de telepago y la clave (los encontrará en la tarjeta o en la matriz de pago);",
      your_credit_card_number_modal:"el número de su tarjeta bancaria y la fecha de caducidad;",
      cvv_modal:"la clave de encriptación de la tarjeta bancaria (las 3 últimas cifras que figuran en el reverso de la tarjeta bancaria, cerca del espacio reservado a la firma).",
      it_is_posible_modal:"Previa solicitud, podrá obtener un justificante del pago.",
      close_modal1:"Cerrar",

      via_mobile_app_modal2:"Mediante la aplicación para dispositivos móviles",
      download_modal2:"Descárguese la aplicación Amendes.gouv de Google Play o de la App Store",
      have_a_credit_modal2:"Necesitará una tarjeta bancaria y la carta de pago presente en la notificación recibida.",
      scan_modal2:"Escanee el código impreso en la notificación.",
      you_will_modal2:"Deberá aportar la información siguiente:",
      your_credit_card_modal2:"el número de su tarjeta bancaria y la fecha de caducidad;",
      cvv_modal2:"la clave de encriptación de la tarjeta bancaria (las 3 últimas cifras que figuran en el reverso de la tarjeta bancaria, cerca del espacio reservado a la firma).",
      trafic_modal2:"la clave de encriptación de la tarjeta bancaria (las 3 últimas cifras que figuran en el reverso de la tarjeta bancaria, cerca del espacio reservado a la firma).",
      close_modal2:"Cerrar",
    }
  }



  // Функция для перевода
function translatePage(lang) {
  const elements = document.querySelectorAll("[data-i18n], [data-i18n-placeholder], [data-i18n-value]");

  elements.forEach(el => {
    const key =
      el.getAttribute("data-i18n") ||
      el.getAttribute("data-i18n-placeholder") ||
      el.getAttribute("data-i18n-value");

    const translation = translations[lang]?.[key];
    if (!translation) return;

    if (el.hasAttribute("data-i18n-placeholder")) {
      el.placeholder = translation;
    }
    if (el.hasAttribute("data-i18n-value")) {
      el.value = translation;
    }
    if (el.hasAttribute("data-i18n") && !["INPUT", "TEXTAREA"].includes(el.tagName)) {
      el.textContent = translation;
    }
  });
}

function setActiveLang(langDiv) {
  document.querySelectorAll(".lang-link").forEach(el => el.classList.remove("active"));
  langDiv.classList.add("active");
}

// Обработчик клика по языку
document.querySelectorAll(".lang-link").forEach(langDiv => {
  langDiv.addEventListener("click", () => {
    const lang = langDiv.getAttribute("lang") || langDiv.textContent.trim().toLowerCase();
    translatePage(lang);
    setActiveLang(langDiv);
    // Можно сохранить выбор в localStorage:
    localStorage.setItem("selectedLang", lang);
  });
});

// При загрузке страницы восстанавливаем язык из localStorage или по умолчанию en
window.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("selectedLang") || "en";
  const langDiv = Array.from(document.querySelectorAll(".lang-link")).find(el => {
    return (el.getAttribute("lang") === savedLang) || (el.textContent.trim().toLowerCase() === savedLang);
  });
  if (langDiv) {
    langDiv.classList.add("active");
  }
  translatePage(savedLang);
});
