"use client";

/* eslint-disable @typescript-eslint/no-explicit-any, react/no-unescaped-entities */

import React, { useState } from "react";
import { generateApplicationPdf } from "@/utils/generateApplicationPdf";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "/api";

const COUNTRY_CODES = [
  { code: "+61", name: "Australia", iso: "au", flag: "🇦🇺" },
  { code: "+93", name: "Afghanistan", iso: "af", flag: "🇦🇫" },
  { code: "+355", name: "Albania", iso: "al", flag: "🇦🇱" },
  { code: "+213", name: "Algeria", iso: "dz", flag: "🇩🇿" },
  { code: "+1", name: "American Samoa", iso: "as", flag: "🇦🇸" },
  { code: "+376", name: "Andorra", iso: "ad", flag: "🇦🇩" },
  { code: "+244", name: "Angola", iso: "ao", flag: "🇦🇴" },
  { code: "+1264", name: "Anguilla", iso: "ai", flag: "🇦🇮" },
  { code: "+1268", name: "Antigua & Barbuda", iso: "ag", flag: "🇦🇬" },
  { code: "+54", name: "Argentina", iso: "ar", flag: "🇦🇷" },
  { code: "+374", name: "Armenia", iso: "am", flag: "🇦🇲" },
  { code: "+297", name: "Aruba", iso: "aw", flag: "🇦🇼" },
  { code: "+43", name: "Austria", iso: "at", flag: "🇦🇹" },
  { code: "+994", name: "Azerbaijan", iso: "az", flag: "🇦🇿" },
  { code: "+1242", name: "Bahamas", iso: "bs", flag: "🇧🇸" },
  { code: "+973", name: "Bahrain", iso: "bh", flag: "🇧🇭" },
  { code: "+880", name: "Bangladesh", iso: "bd", flag: "🇧🇩" },
  { code: "+1246", name: "Barbados", iso: "bb", flag: "🇧🇧" },
  { code: "+375", name: "Belarus", iso: "by", flag: "🇧🇾" },
  { code: "+32", name: "Belgium", iso: "be", flag: "🇧🇪" },
  { code: "+501", name: "Belize", iso: "bz", flag: "🇧🇿" },
  { code: "+229", name: "Benin", iso: "bj", flag: "🇧🇯" },
  { code: "+1441", name: "Bermuda", iso: "bm", flag: "🇧🇲" },
  { code: "+975", name: "Bhutan", iso: "bt", flag: "🇧🇹" },
  { code: "+591", name: "Bolivia", iso: "bo", flag: "🇧🇴" },
  { code: "+387", name: "Bosnia & Herzegovina", iso: "ba", flag: "🇧🇦" },
  { code: "+267", name: "Botswana", iso: "bw", flag: "🇧🇼" },
  { code: "+55", name: "Brazil", iso: "br", flag: "🇧🇷" },
  { code: "+673", name: "Brunei", iso: "bn", flag: "🇧🇳" },
  { code: "+359", name: "Bulgaria", iso: "bg", flag: "🇧🇬" },
  { code: "+226", name: "Burkina Faso", iso: "bf", flag: "🇧🇫" },
  { code: "+257", name: "Burundi", iso: "bi", flag: "🇧🇮" },
  { code: "+855", name: "Cambodia", iso: "kh", flag: "🇰🇭" },
  { code: "+237", name: "Cameroon", iso: "cm", flag: "🇨🇲" },
  { code: "+1", name: "Canada", iso: "ca", flag: "🇨🇦" },
  { code: "+238", name: "Cape Verde", iso: "cv", flag: "🇨🇻" },
  { code: "+1345", name: "Cayman Islands", iso: "ky", flag: "🇰🇾" },
  { code: "+236", name: "Central African Rep", iso: "cf", flag: "🇨🇫" },
  { code: "+235", name: "Chad", iso: "td", flag: "🇹🇩" },
  { code: "+56", name: "Chile", iso: "cl", flag: "🇨🇱" },
  { code: "+86", name: "China", iso: "cn", flag: "🇨🇳" },
  { code: "+57", name: "Colombia", iso: "co", flag: "🇨🇴" },
  { code: "+269", name: "Comoros", iso: "km", flag: "🇰🇲" },
  { code: "+242", name: "Congo", iso: "cg", flag: "🇨🇬" },
  { code: "+682", name: "Cook Islands", iso: "ck", flag: "🇨🇰" },
  { code: "+506", name: "Costa Rica", iso: "cr", flag: "🇨🇷" },
  { code: "+385", name: "Croatia", iso: "hr", flag: "🇭🇷" },
  { code: "+53", name: "Cuba", iso: "cu", flag: "🇨🇺" },
  { code: "+357", name: "Cyprus", iso: "cy", flag: "🇨🇾" },
  { code: "+420", name: "Czech Republic", iso: "cz", flag: "🇨🇿" },
  { code: "+45", name: "Denmark", iso: "dk", flag: "🇩🇰" },
  { code: "+253", name: "Djibouti", iso: "dj", flag: "🇩🇯" },
  { code: "+1767", name: "Dominica", iso: "dm", flag: "🇩🇲" },
  { code: "+1809", name: "Dominican Republic", iso: "do", flag: "🇩🇴" },
  { code: "+593", name: "Ecuador", iso: "ec", flag: "🇪🇨" },
  { code: "+20", name: "Egypt", iso: "eg", flag: "🇪🇬" },
  { code: "+503", name: "El Salvador", iso: "sv", flag: "🇸🇻" },
  { code: "+240", name: "Equatorial Guinea", iso: "gq", flag: "🇬🇶" },
  { code: "+291", name: "Eritrea", iso: "er", flag: "🇪🇷" },
  { code: "+372", name: "Estonia", iso: "ee", flag: "🇪🇪" },
  { code: "+268", name: "Eswatini", iso: "sz", flag: "🇸🇿" },
  { code: "+251", name: "Ethiopia", iso: "et", flag: "🇪🇹" },
  { code: "+679", name: "Fiji", iso: "fj", flag: "🇫🇯" },
  { code: "+358", name: "Finland", iso: "fi", flag: "🇫🇮" },
  { code: "+33", name: "France", iso: "fr", flag: "🇫🇷" },
  { code: "+241", name: "Gabon", iso: "ga", flag: "🇬🇦" },
  { code: "+220", name: "Gambia", iso: "gm", flag: "🇬🇲" },
  { code: "+995", name: "Georgia", iso: "ge", flag: "🇬🇪" },
  { code: "+49", name: "Germany", iso: "de", flag: "🇩🇪" },
  { code: "+233", name: "Ghana", iso: "gh", flag: "🇬🇭" },
  { code: "+30", name: "Greece", iso: "gr", flag: "🇬🇷" },
  { code: "+1473", name: "Grenada", iso: "gd", flag: "🇬🇩" },
  { code: "+502", name: "Guatemala", iso: "gt", flag: "🇬🇹" },
  { code: "+224", name: "Guinea", iso: "gn", flag: "🇬🇳" },
  { code: "+245", name: "Guinea-Bissau", iso: "gw", flag: "🇬🇼" },
  { code: "+592", name: "Guyana", iso: "gy", flag: "🇬🇾" },
  { code: "+509", name: "Haiti", iso: "ht", flag: "🇭🇹" },
  { code: "+504", name: "Honduras", iso: "hn", flag: "🇭🇳" },
  { code: "+852", name: "Hong Kong", iso: "hk", flag: "🇭🇰" },
  { code: "+36", name: "Hungary", iso: "hu", flag: "🇭🇺" },
  { code: "+354", name: "Iceland", iso: "is", flag: "🇮🇸" },
  { code: "+91", name: "India", iso: "in", flag: "🇮🇳" },
  { code: "+62", name: "Indonesia", iso: "id", flag: "🇮🇩" },
  { code: "+98", name: "Iran", iso: "ir", flag: "🇮🇷" },
  { code: "+964", name: "Iraq", iso: "iq", flag: "🇮🇶" },
  { code: "+353", name: "Ireland", iso: "ie", flag: "🇮🇪" },
  { code: "+972", name: "Israel", iso: "il", flag: "🇮🇱" },
  { code: "+39", name: "Italy", iso: "it", flag: "🇮🇹" },
  { code: "+1876", name: "Jamaica", iso: "jm", flag: "🇯🇲" },
  { code: "+81", name: "Japan", iso: "jp", flag: "🇯🇵" },
  { code: "+962", name: "Jordan", iso: "jo", flag: "🇯🇴" },
  { code: "+7", name: "Kazakhstan", iso: "kz", flag: "🇰🇿" },
  { code: "+254", name: "Kenya", iso: "ke", flag: "🇰🇪" },
  { code: "+686", name: "Kiribati", iso: "ki", flag: "🇰🇮" },
  { code: "+965", name: "Kuwait", iso: "kw", flag: "🇰🇼" },
  { code: "+996", name: "Kyrgyzstan", iso: "kg", flag: "🇰🇬" },
  { code: "+856", name: "Laos", iso: "la", flag: "🇱🇦" },
  { code: "+371", name: "Latvia", iso: "lv", flag: "🇱🇻" },
  { code: "+961", name: "Lebanon", iso: "lb", flag: "🇱🇧" },
  { code: "+266", name: "Lesotho", iso: "ls", flag: "🇱🇸" },
  { code: "+231", name: "Liberia", iso: "lr", flag: "🇱🇷" },
  { code: "+218", name: "Libya", iso: "ly", flag: "🇱🇾" },
  { code: "+423", name: "Liechtenstein", iso: "li", flag: "🇱🇮" },
  { code: "+370", name: "Lithuania", iso: "lt", flag: "🇱🇹" },
  { code: "+352", name: "Luxembourg", iso: "lu", flag: "🇱🇺" },
  { code: "+853", name: "Macau", iso: "mo", flag: "🇲🇴" },
  { code: "+389", name: "North Macedonia", iso: "mk", flag: "🇲🇰" },
  { code: "+261", name: "Madagascar", iso: "mg", flag: "🇲🇬" },
  { code: "+265", name: "Malawi", iso: "mw", flag: "🇲🇼" },
  { code: "+60", name: "Malaysia", iso: "my", flag: "🇲🇾" },
  { code: "+960", name: "Maldives", iso: "mv", flag: "🇲🇻" },
  { code: "+223", name: "Mali", iso: "ml", flag: "🇲🇱" },
  { code: "+356", name: "Malta", iso: "mt", flag: "🇲🇹" },
  { code: "+692", name: "Marshall Islands", iso: "mh", flag: "🇲🇭" },
  { code: "+222", name: "Mauritania", iso: "mr", flag: "🇲🇷" },
  { code: "+230", name: "Mauritius", iso: "mu", flag: "🇲🇺" },
  { code: "+52", name: "Mexico", iso: "mx", flag: "🇲🇽" },
  { code: "+691", name: "Micronesia", iso: "fm", flag: "🇫🇲" },
  { code: "+373", name: "Moldova", iso: "md", flag: "🇲🇩" },
  { code: "+377", name: "Monaco", iso: "mc", flag: "🇲🇨" },
  { code: "+976", name: "Mongolia", iso: "mn", flag: "🇲🇳" },
  { code: "+382", name: "Montenegro", iso: "me", flag: "🇲🇪" },
  { code: "+212", name: "Morocco", iso: "ma", flag: "🇲🇦" },
  { code: "+258", name: "Mozambique", iso: "mz", flag: "🇲🇿" },
  { code: "+95", name: "Myanmar", iso: "mm", flag: "🇲🇲" },
  { code: "+264", name: "Namibia", iso: "na", flag: "🇳🇦" },
  { code: "+674", name: "Nauru", iso: "nr", flag: "🇳🇷" },
  { code: "+977", name: "Nepal", iso: "np", flag: "🇳🇵" },
  { code: "+31", name: "Netherlands", iso: "nl", flag: "🇳🇱" },
  { code: "+64", name: "New Zealand", iso: "nz", flag: "🇳🇿" },
  { code: "+505", name: "Nicaragua", iso: "ni", flag: "🇳🇮" },
  { code: "+227", name: "Niger", iso: "ne", flag: "🇳🇪" },
  { code: "+234", name: "Nigeria", iso: "ng", flag: "🇳🇬" },
  { code: "+850", name: "North Korea", iso: "kp", flag: "🇰🇵" },
  { code: "+47", name: "Norway", iso: "no", flag: "🇳🇴" },
  { code: "+968", name: "Oman", iso: "om", flag: "🇴🇲" },
  { code: "+92", name: "Pakistan", iso: "pk", flag: "🇵🇰" },
  { code: "+680", name: "Palau", iso: "pw", flag: "🇵🇼" },
  { code: "+970", name: "Palestine", iso: "ps", flag: "🇵🇸" },
  { code: "+507", name: "Panama", iso: "pa", flag: "🇵🇦" },
  { code: "+675", name: "Papua New Guinea", iso: "pg", flag: "🇵🇬" },
  { code: "+595", name: "Paraguay", iso: "py", flag: "🇵🇾" },
  { code: "+51", name: "Peru", iso: "pe", flag: "🇵🇪" },
  { code: "+63", name: "Philippines", iso: "ph", flag: "🇵🇭" },
  { code: "+48", name: "Poland", iso: "pl", flag: "🇵🇱" },
  { code: "+351", name: "Portugal", iso: "pt", flag: "🇵🇹" },
  { code: "+974", name: "Qatar", iso: "qa", flag: "🇶🇦" },
  { code: "+40", name: "Romania", iso: "ro", flag: "🇷🇴" },
  { code: "+7", name: "Russia", iso: "ru", flag: "🇷🇺" },
  { code: "+250", name: "Rwanda", iso: "rw", flag: "🇷🇼" },
  { code: "+685", name: "Samoa", iso: "ws", flag: "🇼🇸" },
  { code: "+966", name: "Saudi Arabia", iso: "sa", flag: "🇸🇦" },
  { code: "+221", name: "Senegal", iso: "sn", flag: "🇸🇳" },
  { code: "+381", name: "Serbia", iso: "rs", flag: "🇷🇸" },
  { code: "+248", name: "Seychelles", iso: "sc", flag: "🇸🇨" },
  { code: "+232", name: "Sierra Leone", iso: "sl", flag: "🇸🇱" },
  { code: "+65", name: "Singapore", iso: "sg", flag: "🇸🇬" },
  { code: "+421", name: "Slovakia", iso: "sk", flag: "🇸🇰" },
  { code: "+386", name: "Slovenia", iso: "si", flag: "🇸🇮" },
  { code: "+677", name: "Solomon Islands", iso: "sb", flag: "🇸🇧" },
  { code: "+252", name: "Somalia", iso: "so", flag: "🇸🇴" },
  { code: "+27", name: "South Africa", iso: "za", flag: "🇿🇦" },
  { code: "+82", name: "South Korea", iso: "kr", flag: "🇰🇷" },
  { code: "+34", name: "Spain", iso: "es", flag: "🇪🇸" },
  { code: "+94", name: "Sri Lanka", iso: "lk", flag: "🇱🇰" },
  { code: "+249", name: "Sudan", iso: "sd", flag: "🇸🇩" },
  { code: "+46", name: "Sweden", iso: "se", flag: "🇸🇪" },
  { code: "+41", name: "Switzerland", iso: "ch", flag: "🇨🇭" },
  { code: "+963", name: "Syria", iso: "sy", flag: "🇸🇾" },
  { code: "+886", name: "Taiwan", iso: "tw", flag: "🇹🇼" },
  { code: "+992", name: "Tajikistan", iso: "tj", flag: "🇹🇯" },
  { code: "+255", name: "Tanzania", iso: "tz", flag: "🇹🇿" },
  { code: "+66", name: "Thailand", iso: "th", flag: "🇹🇭" },
  { code: "+670", name: "Timor-Leste", iso: "tl", flag: "🇹🇱" },
  { code: "+228", name: "Togo", iso: "tg", flag: "🇹🇬" },
  { code: "+676", name: "Tonga", iso: "to", flag: "🇹🇴" },
  { code: "+1868", name: "Trinidad & Tobago", iso: "tt", flag: "🇹🇹" },
  { code: "+216", name: "Tunisia", iso: "tn", flag: "🇹🇳" },
  { code: "+90", name: "Turkey", iso: "tr", flag: "🇹🇷" },
  { code: "+993", name: "Turkmenistan", iso: "tm", flag: "🇹🇲" },
  { code: "+688", name: "Tuvalu", iso: "tv", flag: "🇹🇻" },
  { code: "+256", name: "Uganda", iso: "ug", flag: "🇺🇬" },
  { code: "+380", name: "Ukraine", iso: "ua", flag: "🇺🇦" },
  { code: "+971", name: "United Arab Emirates", iso: "ae", flag: "🇦🇪" },
  { code: "+44", name: "United Kingdom", iso: "gb", flag: "🇬🇧" },
  { code: "+1", name: "United States", iso: "us", flag: "🇺🇸" },
  { code: "+598", name: "Uruguay", iso: "uy", flag: "🇺🇾" },
  { code: "+998", name: "Uzbekistan", iso: "uz", flag: "🇺🇿" },
  { code: "+678", name: "Vanuatu", iso: "vu", flag: "🇻🇺" },
  { code: "+58", name: "Venezuela", iso: "ve", flag: "🇻🇪" },
  { code: "+84", name: "Vietnam", iso: "vn", flag: "🇻🇳" },
  { code: "+967", name: "Yemen", iso: "ye", flag: "🇾🇪" },
  { code: "+260", name: "Zambia", iso: "zm", flag: "🇿🇲" },
  { code: "+263", name: "Zimbabwe", iso: "zw", flag: "🇿🇼" },
];

const DEPARTMENT_COURSES: Record<
  string,
  { category: string; options: string[] }[]
> = {
  ELICOS: [
    {
      category: "ELICOS",
      options: ["114771J - General English (Up to 70 weeks)"],
    },
  ],
  "Human Welfare Studies and Services": [
    {
      category: "Human Welfare Studies and Services",
      options: [
        "CHC33021 - Certificate III in Individual Support (Ageing and Disability) - Duration (weeks up to 52)",
        "CHC43121 - Certificate IV in Disability Support - Duration (weeks up to 26)",
        "CHC52025 - Diploma of Community Services - Duration (weeks up to 104)",
        "CHC52025 - Diploma of Community Services - Fastrack- Duration (weeks up to 52)",
        "CHC62015 - Advanced Diploma of Community Sector Management Duration - (weeks up to 78)",
        "CHC62015 - Advanced Diploma of Community Sector Management (pathway with CHC52025 Diploma of Community Services) - Duration (weeks up to 52)",
      ],
    },
    {
      category: "Package options",
      options: [
        "CHC33021 Certificate III in Individual Support (Ageing and Disability) + CHC43121 Certificate IV in Disability Support (weeks up to 78)",
        "CHC33021 - Certificate III in Individual Support (Ageing and Disability) + CHC52025- Diploma of Community Services - Duration (weeks up to 154)",
        "CHC33021 - Certificate III in Individual Support (Ageing and Disability) + CHC43121 - Certificate IV in Disability Support + CHC52025 - Diploma of Community Services - Duration (weeks up to 180)",
        "CHC52025 - Diploma of Community Services + CHC62015 - Advanced Diploma of Community Sector Management - Duration (weeks up to 156)",
      ],
    },
    {
      category: "Package options - Fastrack",
      options: [
        "CHC52025 - Diploma of Community Services + CHC62015 - Advanced Diploma of Community Sector Management - Duration (weeks up to 104)",
      ],
    },
    {
      category: "Package options",
      options: [
        "CHC33021 - Certificate III in Individual Support (Ageing and Disability) + CHC43121 - Certificate IV in Disability Support + CHC52025 - Diploma of Community Services + CHC62015 - Advance Diploma of Community Sector Management - Duration (weeks up to 234)",
      ],
    },
  ],
  "Building Trades": [
    {
      category: "Building Trades",
      options: [
        "CPC30220 - Certificate III in Carpentry - Duration (weeks up to 52)",
        "CPC30620 - Certificate III in Painting and Decorating - (weeks up to 52)",
        "CPC50220 - Diploma of Building and Construction (Building) - Duration (weeks up to 52)",
        "CPC33020 - Certificate III in Bricklaying and Blocklaying - (weeks up to 52)",
        "CPC31020 - Certificate III in Solid Plastering - (weeks up to 52)",
        "CPC31320 - Certificate III in Wall and Floor Tiling - (weeks up to 52)",
        "MSF30322 - Certificate III in Cabinet Making and Timber Technology - (weeks up to 52)",
      ],
    },
    {
      category: "Package options",
      options: [
        "CPC30220 + CPC50220 - Certificate III in Carpentry + Diploma of Building and Construction (Building) - 104",
        "CPC30620 + CPC50220 - Certificate III in Painting and Decorating + Diploma of Building and Construction (Building) 104",
        "CPC31020 + CPC50220 - Certificate III in Solid Plastering + Diploma of Building and Construction (Building) 104",
        "CPC31320 + CPC50220 - Certificate III in Wall and Floor Tiling + Diploma of Building and Construction (Building) 104",
        "CPC33020 + CPC50220 - Certificate III in Bricklaying and Block laying + Diploma of Building and Construction (Building) 104",
        "MSF30322 +CPC50220 - Certificate III in Cabinet Making and Timber Technology + Diploma of Building and Construction (Building) 104",
      ],
    },
  ],
  "Automotive Engineering and Technology": [
    {
      category: "Automotive Engineering and Technology",
      options: [
        "AUR30620 - Certificate III in Light Vehicle Mechanical Technology - Duration (weeks up to 52)",
        "AUR30320 - Certificate III in Automotive Electrical Technology - Duration (weeks up to 52)",
        "AUR40226 - Certificate IV in Automotive Mechanical Diagnosis - Duration (weeks up to 26)",
        "AUR50216 - Diploma of Automotive Technology - Duration (weeks up to 26)",
      ],
    },
    {
      category: "Package options",
      options: [
        "AUR30620 - Certificate III in Light Vehicle Mechanical Technology + Certificate IV in Automotive Mechanical Diagnosis + AUR50216 - Diploma of Automotive Technology - Duration (weeks up to 104)",
        "AUR30320 - Certificate III in Automotive Electrical Technology + AUR40226 - Certificate IV in Automotive Mechanical Diagnosis + AUR50216 - Diploma of Automotive Technology - Duration (weeks up to 104)",
      ],
    },
  ],
  "Information Technology": [
    {
      category: "Information Technology",
      options: [
        "ICT60220 Advanced Diploma of Information Technology (Telecommunications Network Engineering) - Duration (weeks up to 104)",
      ],
    },
  ],
  "Civil Engineering": [
    {
      category: "Civil Engineering",
      options: [
        "RII60520 - Advanced Diploma of Civil Construction Design - Duration (weeks up to 104)",
      ],
    },
  ],
  "Business and Management": [
    {
      category: "Business and Management",
      options: [
        "BSB50420 - Diploma of Leadership and Management - Duration (weeks up to 52)",
        "BSB60420 - Advanced Diploma of Leadership and Management - Duration (weeks up to 52)",
        "BSB80120 - Graduate Diploma of Management (Learning) - Duration (weeks up to 52)",
      ],
    },
    {
      category: "Package options",
      options: [
        "BSB50420 - Diploma of Leadership and Management + BSB60420 - Advanced Diploma of Leadership and Management - Duration (weeks up to 104)",
        "BSB50420 - Diploma of Leadership and Management + BSB60420 - Advanced Diploma of Leadership and Management + BSB80120 - Graduate Diploma of Management (Learning) - Duration (weeks up to 156)",
      ],
    },
  ],
  "Food And Hospitality": [
    {
      category: "Food And Hospitality",
      options: [
        "SIT30821 - Certificate III in Commercial Cookery - Duration (weeks up to 52)",
        "SIT40521 - Certificate IV in Kitchen Management - Duration (weeks up to 52)",
        "SIT50422 - Diploma of Hospitality Management - Duration (weeks up to 52)",
      ],
    },
    {
      category: "Package options",
      options: [
        "SIT30821 - Certificate III in Commercial Cookery + SIT40521 - Certificate IV in Kitchen Management - Duration (weeks up to 78)",
        "SIT30821 - Certificate III in Commercial Cookery + SIT40521 - Certificate IV in Kitchen Management + SIT50422 - Diploma of Hospitality Management - Duration (weeks up to 104)",
        "SIT40521 - Certificate IV in Kitchen Management + SIT50422 - Diploma of Hospitality Management - Duration (weeks up to 78)",
      ],
    },
  ],
};

function CountryCodePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (code: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  const selectedCountry =
    COUNTRY_CODES.find((c) => c.code === value) || COUNTRY_CODES[0];

  const filteredCountries = COUNTRY_CODES.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.code.includes(search),
  );

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 bg-[#f4f5f7] border border-r-0 border-gray-300 rounded-l-sm hover:bg-gray-100 focus:outline-none transition-colors h-full"
      >
        <img
          src={`https://flagcdn.com/w40/${selectedCountry.iso}.png`}
          alt={selectedCountry.name}
          className="w-5 h-3.5 object-cover rounded-xs border border-gray-300 shadow-2xs flex-shrink-0"
        />
        <span className="text-xs font-semibold text-gray-700">
          {selectedCountry.code}
        </span>
        <svg
          className="w-3 h-3 text-gray-500 ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 w-64 bg-white border border-gray-300 shadow-xl rounded-sm z-50 max-h-64 flex flex-col">
          <div className="p-2 border-b border-gray-200 sticky top-0 bg-white z-10">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-2.5 py-1.5 border border-gray-300 rounded-sm text-xs text-gray-900 focus:outline-none focus:border-[#5157a4]"
              autoFocus
            />
          </div>
          <div className="overflow-y-auto flex-1 max-h-52 divide-y divide-gray-50">
            {filteredCountries.map((country, idx) => (
              <button
                key={`${country.code}-${idx}`}
                type="button"
                onClick={() => {
                  onChange(country.code);
                  setIsOpen(false);
                  setSearch("");
                }}
                className={`w-full px-3 py-2 text-left text-xs flex items-center justify-between hover:bg-gray-100 transition-colors ${
                  value === country.code ? "bg-gray-50 font-semibold" : ""
                }`}
              >
                <div className="flex items-center space-x-2.5 truncate pr-2">
                  <img
                    src={`https://flagcdn.com/w40/${country.iso}.png`}
                    alt={country.name}
                    className="w-5 h-3.5 object-cover rounded-xs border border-gray-200 flex-shrink-0"
                  />
                  <span className="text-gray-800 truncate">{country.name}</span>
                </div>
                <span className="text-gray-500 font-mono text-[11px]">
                  {country.code}
                </span>
              </button>
            ))}
            {filteredCountries.length === 0 && (
              <div className="px-3 py-4 text-xs text-gray-500 text-center">
                No countries found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function ApplicationForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState<Record<string, any>>({
    // Document Checklist
    passportCopy: false,
    certifiedAcademicRecords: false,
    australianAcademicRecords: false,
    currentCOE: false,
    coeRTO: false,
    letterOfOffer: false,
    englishTest: false,
    qteAssessment: false,
    curriculumVitae: false,
    references: false,

    // Student Details
    currentLocation: "onshore",
    applicantType: "domestic",
    title: "Mr.",
    givenName: "",
    middleName: "",
    familyName: "",
    dateOfBirth: "",
    email: "",
    mobile: "",
    homePhone: "",
    streetNumber: "",
    streetName: "",
    city: "",
    stateProvince: "",
    postalCode: "",
    country: "Australia",

    // CRICOS Related Details
    countryOfCitizenship: "",
    passportNumber: "",
    visaNumber: "",

    // English Language Proficiency
    ielts: "",
    dateOfTest: "",

    // VET Related Details
    vetGender: "female",
    indigenousStatus: "no",
    countryOfBirth: "",
    cityOfBirth: "",
    austCitizenshipStatus: "",
    aboriginalTorresStrait: "no",
    employmentStatus: "",
    languageOtherThanEnglish: "no",
    requireEnglishAssistance: "no",
    highestCompletedLevel: "",
    yearCompleted: "",
    disabilities: "no",
    priorEducation: "no",
    alternateEmail: "",

    // Unique Student Identifier
    usi: "",

    // Emergency Contact Information
    emergencyName: "",
    emergencyRelationship: "",
    emergencyPhone: "",
    emergencyComments: "",

    // Qualification Programs
    qualificationLocation: "melbourne",
    intakeDay: "",
    intakeMonth: "",
    intakeYear: "",
    selectedDepartments: [] as string[],
    selectedCourses: [] as string[],

    // RPL and Credit Transfer
    creditTransfer: "",
    rplRecognition: "",

    // Step 2 - OSHC
    arrangeOSHC: "",
    currentOSHCProvider: "",
    currentOSHCMembership: "",
    currentOSHCExpiry: "",
    requiredOSHCType: "",
    newOSHCProvider: "",
    newOSHCMembership: "",
    newOSHCExpiry: "",

    // Course Readiness
    readTime: "",
    addPhotos: "",
    wontChangeRegion: "",
    phoneNumber: "",
    phoneMessage: "",
    timeframeForm: "",
    followInstructions: "",
    attendedAustralianCollege: "",
    llnSupport: "",

    // Learning Materials & Quality Assurance
    qualityAssurance: "",

    // Declaration
    declarationAgree: false,
    fullName: "",
    signature: "",
    signatureDate: "",

    // Application Information
    representedByAgent: "",
    agentEmail: "",
    agentName: "",
    businessName: "",
    studentType: "",

    // Upload files
    passportFile: null,
    academicTranscriptFile: null,
    englishLanguageFile: null,
    osidFile: null,
    otherFile: null,
  });
  const submitForm = async () => {
    try {
      const submitData = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        // Files
        if (value instanceof File) {
          submitData.append(key, value);
        }

        // Arrays like selectedCourses and selectedDepartments
        else if (Array.isArray(value)) {
          value.forEach((item) => {
            submitData.append(key, item);
          });
        }

        // Everything else: string, boolean, etc.
        else if (value !== null && value !== undefined) {
          submitData.append(key, String(value));
        }
      });

      const response = await fetch("/api/igt-submit-form", {
        method: "POST",
        body: submitData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit form");
      }

      console.log("Submitted successfully:", result);

      return result;
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleFileUpload = (field: string, file: File | null) => {
    setFormData((prev) => ({ ...prev, [field]: file }));
  };

  const isCanvasSigned = () => {
    if (typeof document === "undefined") return false;
    const canvas = document.getElementById(
      "signatureCanvas",
    ) as HTMLCanvasElement;
    if (!canvas) return Boolean(formData.signature);
    const ctx = canvas.getContext("2d");
    if (!ctx) return Boolean(formData.signature);
    const pixelData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
    for (let i = 3; i < pixelData.length; i += 4) {
      if (pixelData[i] > 0) return true;
    }
    return Boolean(formData.signature);
  };

  const validateStep1 = () => {
    const missing: string[] = [];
    if (!formData.currentLocation?.trim()) missing.push("Current Location");
    if (!formData.applicantType?.trim())
      missing.push("Application Form / Type");
    if (!formData.givenName?.trim()) missing.push("Given Name");
    if (!formData.dateOfBirth?.trim()) missing.push("Date of Birth");
    if (!formData.email?.trim()) missing.push("Email Address");
    if (!formData.mobile?.trim()) missing.push("Mobile");
    if (!formData.streetName?.trim()) missing.push("Street Name");
    if (!formData.city?.trim()) missing.push("City");
    if (!formData.stateProvince?.trim()) missing.push("State/Province");
    if (!formData.country?.trim()) missing.push("Country");
    if (!formData.countryOfCitizenship?.trim())
      missing.push("Country of Citizenship");
    if (!formData.passportNumber?.trim()) missing.push("Passport Number");
    if (!formData.vetGender?.trim()) missing.push("Gender");
    if (!formData.countryOfBirth?.trim()) missing.push("Country of Birth");
    if (!formData.austCitizenshipStatus?.trim())
      missing.push("Aust Citizenship Status");
    if (!formData.aboriginalTorresStrait?.trim())
      missing.push("Aboriginal or Torres Strait Islander Origin");
    if (!formData.employmentStatus?.trim()) missing.push("Employment Status");
    if (!formData.languageOtherThanEnglish?.trim())
      missing.push("Do you speak a language other than English at home?");
    if (!formData.requireEnglishAssistance?.trim())
      missing.push("Do you require English Assistance");
    if (!formData.highestCompletedLevel?.trim())
      missing.push("Highest COMPLETED school level");
    if (!formData.yearCompleted?.trim()) missing.push("Year completed");
    if (!formData.disabilities?.trim()) missing.push("Disabilities");
    if (!formData.priorEducation?.trim()) missing.push("Prior education");
    if (!formData.emergencyName?.trim()) missing.push("Emergency contact Name");
    if (!formData.emergencyRelationship?.trim())
      missing.push("Emergency contact Relationship");
    if (!formData.emergencyPhone?.trim())
      missing.push("Emergency contact Phone Number");
    if (!formData.qualificationLocation?.trim())
      missing.push("Qualification Location");
    if (
      !formData.intakeDay?.trim() ||
      !formData.intakeMonth?.trim() ||
      !formData.intakeYear?.trim()
    ) {
      missing.push("Intake Date (Day, Month, Year)");
    }

    if (missing.length > 0) {
      setErrorMessage(
        `Please fill in all required fields before proceeding: ${missing.join(", ")}`,
      );
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (!validateStep1()) {
      setShowError(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    setShowError(false);
    setErrorMessage("");
    setCurrentStep(2);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCheckboxChange = (field: string) => {
    setFormData((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleDepartmentToggle = (dept: string) => {
    setFormData((prev) => {
      const exists = prev.selectedDepartments.includes(dept);
      return {
        ...prev,
        selectedDepartments: exists
          ? prev.selectedDepartments.filter((d: string) => d !== dept)
          : [...prev.selectedDepartments, dept],
      };
    });
  };

  const handleCourseToggle = (course: string) => {
    setFormData((prev) => {
      const exists = prev.selectedCourses.includes(course);
      return {
        ...prev,
        selectedCourses: exists
          ? prev.selectedCourses.filter((c: string) => c !== course)
          : [...prev.selectedCourses, course],
      };
    });
  };

  const validateForm = () => {
    if (!validateStep1()) {
      return false;
    }

    const missingStep2: string[] = [];

    // All dropdowns of "are you ready to complete the course" section (7 tasks x 2)
    for (let i = 0; i < 7; i++) {
      if (!(formData as any)[`lln${i}_eng`]) {
        missingStep2.push(`Course Readiness Task ${i + 1} (In English)`);
      }
      if (!(formData as any)[`lln${i}_lang`]) {
        missingStep2.push(
          `Course Readiness Task ${i + 1} (In my first language)`,
        );
      }
    }

    // LLN Support
    if (!formData.llnSupport?.trim()) {
      missingStep2.push(
        "Language, literacy and/or numeracy support requirement",
      );
    }

    // Participation Agreement / Quality Assurance
    if (!formData.qualityAssurance?.trim()) {
      missingStep2.push("Participation agreement");
    }

    // Declaration Checkbox & Full Name
    if (!formData.declarationAgree) {
      missingStep2.push("Declaration agreement checkbox");
    }
    if (!formData.fullName?.trim()) {
      missingStep2.push("Full Name");
    }

    // Signature
    if (!isCanvasSigned()) {
      missingStep2.push("Signature");
    }

    // Represented by Agent
    if (!formData.representedByAgent?.trim()) {
      missingStep2.push("Are you represented by an agent?");
    } else if (formData.representedByAgent.toLowerCase() === "yes") {
      if (!formData.agentEmail?.trim()) missingStep2.push("Agent Email");
      if (!formData.agentName?.trim()) missingStep2.push("Agent Name");
      if (!formData.businessName?.trim()) missingStep2.push("Business Name");
    }

    // Upload section
    if (!formData.passportFile) {
      missingStep2.push("Passport Upload");
    }
    if (!formData.academicTranscriptFile) {
      missingStep2.push("Academic Transcripts/Certificate Upload");
    }

    if (missingStep2.length > 0) {
      setErrorMessage(
        `Please fill in all required fields before submitting: ${missingStep2.join(", ")}`,
      );
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setShowError(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    setShowError(false);
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      // Create FormData object
      const submitData = new FormData();

      // Document checklist
      submitData.append("hasPassport", formData.passportCopy.toString());
      submitData.append(
        "hasCopiesOfAcademicOfHome",
        formData.certifiedAcademicRecords.toString(),
      );
      submitData.append(
        "hasCopiesOfAcademicOfAustralia",
        formData.australianAcademicRecords.toString(),
      );
      submitData.append("hasCurrentCOE", formData.currentCOE.toString());
      submitData.append(
        "hasQTEassessmentForm",
        formData.qteAssessment.toString(),
      );
      submitData.append(
        "hasCurriculumVitae",
        formData.curriculumVitae.toString(),
      );
      submitData.append("references", formData.references ? "Yes" : "No");
      submitData.append("currentLocation", formData.currentLocation);
      submitData.append("applicationType", formData.applicantType);

      // Personal Information
      const fullMobile =
        `${(formData as any).mobileCode || "+61"} ${formData.mobile}`.trim();
      const fullHomePhone =
        `${(formData as any).homePhoneCode || "+61"} ${formData.homePhone}`.trim();
      const fullEmergencyPhone =
        `${(formData as any).emergencyPhoneCode || "+61"} ${formData.emergencyPhone}`.trim();

      submitData.append("title", formData.title);
      submitData.append("givenName", formData.givenName);
      submitData.append("middleName", formData.middleName);
      submitData.append("familyName", formData.familyName);
      submitData.append("dateOfBirth", formData.dateOfBirth);
      submitData.append("emailAddress", formData.email);
      submitData.append("mobile", fullMobile);
      submitData.append("homePhone", fullHomePhone);

      // Address
      submitData.append("streetNumber", formData.streetNumber);
      submitData.append("streetName", formData.streetName);
      submitData.append("city", formData.city);
      submitData.append("stateProvince", formData.stateProvince);
      submitData.append("postalCode", formData.postalCode);
      submitData.append("country", formData.country);

      // Citizenship & Visa
      submitData.append("countryOfCitizenship", formData.countryOfCitizenship);
      submitData.append("passportNumber", formData.passportNumber);
      submitData.append("visaNumber", formData.visaNumber);

      // English Proficiency
      submitData.append("ielts", formData.ielts);
      submitData.append("dateOfTest", formData.dateOfTest);

      // Additional Personal Info
      submitData.append("gender", formData.vetGender);
      submitData.append("countryOfBirth", formData.countryOfBirth);
      submitData.append("cityOfBirth", formData.cityOfBirth);
      submitData.append(
        "austCitizenshipStatus",
        formData.austCitizenshipStatus,
      );
      submitData.append(
        "aboriginalOrTorresStraitIslander",
        formData.aboriginalTorresStrait,
      );
      submitData.append("employmentStatus", formData.employmentStatus);
      submitData.append(
        "doSpeakEnglishAtHome",
        formData.languageOtherThanEnglish === "no" ? "true" : "false",
      );
      submitData.append(
        "requireEnglishAssisance",
        formData.requireEnglishAssistance === "yes" ? "true" : "false",
      );
      submitData.append(
        "higheshtSchoolEducation",
        formData.highestCompletedLevel,
      );
      submitData.append("yearCompleted", formData.yearCompleted);
      submitData.append("disabilities", formData.disabilities);
      submitData.append("priorEducation", formData.priorEducation);

      // Contact & Emergency
      submitData.append("alternateEmailAddress", formData.alternateEmail);
      submitData.append("usi", formData.usi);
      submitData.append("emergencyContactName", formData.emergencyName);
      submitData.append(
        "emergencyRelationship",
        formData.emergencyRelationship,
      );
      submitData.append("emergencyPhonNumber", fullEmergencyPhone);
      submitData.append("emergencyContactComments", formData.emergencyComments);

      // Course Information
      submitData.append(
        "qualificationLocation",
        formData.qualificationLocation,
      );
      submitData.append(
        "intakeDate",
        `${formData.intakeDay}/${formData.intakeMonth}/${formData.intakeYear}`,
      );
      submitData.append(
        "isApplyingForCreditTransfer",
        formData.creditTransfer === "yes" ? "true" : "false",
      );
      submitData.append(
        "isApplyingForRecognitionOfRPL",
        formData.rplRecognition === "yes" ? "true" : "false",
      );

      formData.selectedCourses.forEach((course: string) => {
        submitData.append("courses[]", course);
      });
      formData.selectedDepartments.forEach((dept: string) => {
        submitData.append("departments[]", dept);
      });

      // OSHC Information
      submitData.append("oshcType", formData.requiredOSHCType || "");
      submitData.append(
        "oshcProviderName",
        formData.newOSHCProvider || formData.currentOSHCProvider || "",
      );
      submitData.append(
        "oschMembershipNumber",
        formData.newOSHCMembership || formData.currentOSHCMembership || "",
      );
      submitData.append(
        "oschExpiryDate",
        formData.newOSHCExpiry || formData.currentOSHCExpiry || "",
      );

      // Language & Literacy Assessment
      submitData.append("iCan", formData.readTime || "");
      submitData.append("isMyFirstLang", "false");
      submitData.append("canReadTimeOnClock", formData.readTime || "");
      submitData.append("isMyFirstlang2", "false");
      submitData.append("canAddUpThings", formData.addPhotos || "");
      submitData.append("isMyFirstLang3", "false");
      submitData.append(
        "canKnowHowMuchChange",
        formData.wontChangeRegion || "",
      );
      submitData.append("isMyFirstLang4", "false");
      submitData.append("canUsePhone", formData.phoneNumber || "");
      submitData.append("isMyFirstLang5", "false");
      submitData.append("canTakePhoneMessage", formData.phoneMessage || "");
      submitData.append("isMyFirstLang6", "false");
      submitData.append(
        "canFillAFormForTimesheet",
        formData.timeframeForm || "",
      );
      submitData.append("isMyFirstLang7", "false");
      submitData.append(
        "canFollowInstructions",
        formData.followInstructions || "",
      );
      submitData.append("isMyFirstLang8", "false");

      // Previous Attendance & Agreements
      submitData.append(
        "haveAttendedAUSCBefore",
        formData.attendedAustralianCollege === "yes" ? "true" : "false",
      );
      submitData.append(
        "agreeToBeContacted",
        formData.declarationAgree.toString(),
      );
      submitData.append(
        "agreeTermsAndConditions",
        formData.declarationAgree.toString(),
      );

      // Signature
      const canvasEl =
        typeof document !== "undefined"
          ? (document.getElementById("signatureCanvas") as HTMLCanvasElement)
          : null;
      const signatureData = canvasEl
        ? canvasEl.toDataURL("image/png")
        : formData.signature;

      submitData.append("fullName", formData.fullName);
      submitData.append("signature", signatureData);

      // Agent Information
      submitData.append("agentName", formData.agentName || "");
      submitData.append("agentEmail", formData.agentEmail || "");
      submitData.append("businessName", formData.businessName || "");
      submitData.append(
        "studentType",
        formData.studentType || "Direct Application",
      );

      // Attach files (passport, academicCertificate, englishCertificate, osid, other)
      if (formData.passportFile) {
        submitData.append("passport", formData.passportFile);
      }
      if (formData.academicTranscriptFile) {
        submitData.append(
          "academicCertificate",
          formData.academicTranscriptFile,
        );
      }
      if (formData.englishLanguageFile) {
        submitData.append("englishCertificate", formData.englishLanguageFile);
      }
      if (formData.osidFile) {
        submitData.append("osid", formData.osidFile);
      }

      // Attach Form Data PDF document under dedicated 'formData' field
      try {
        const pdfBlob = generateApplicationPdf(formData);
        const pdfFile = new File(
          [pdfBlob],
          "Student_Application_Form_Data.pdf",
          { type: "application/pdf" },
        );
        submitData.append("formData", pdfFile);

        if (formData.otherFile) {
          submitData.append("other", formData.otherFile);
        } else {
          submitData.append("other", pdfFile);
        }
      } catch (pdfErr) {
        console.warn("PDF generation error:", pdfErr);
        if (formData.otherFile) {
          submitData.append("other", formData.otherFile);
        }
      }

      let response: Response | null = null;
      let result: any = {};

      response = await fetch("/api/igt-submit-form", {
        method: "POST",
        body: submitData,
      });
      result = await response.json().catch(() => ({}));

      if (
        response &&
        response.ok &&
        (result.error === undefined || result.success !== false)
      ) {
        setSuccess(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        // Reset form after 3 seconds
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      } else {
        setError(
          result?.error || result?.message || "Failed to submit application",
        );
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } catch (err) {
      console.error("Submission error:", err);
      setError("Network error. Please check your connection and try again.");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Success Message */}
        {success && (
          <div className="mb-6 bg-green-50 border-2 border-green-500 rounded-xl p-6 animate-fade-in">
            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-green-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-green-800">
                  Application Submitted Successfully!
                </h3>
                <p className="text-green-700">
                  Thank you for your application. We'll review it and contact
                  you soon.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 bg-red-50 border-2 border-red-500 rounded-xl p-6 animate-fade-in">
            <div className="flex items-center">
              <svg
                className="w-8 h-8 text-red-500 mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="text-lg font-bold text-red-800">
                  Submission Failed
                </h3>
                <p className="text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {showError && (
          <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded-lg animate-fade-in">
            <div className="flex items-start">
              <svg
                className="w-6 h-6 text-red-500 mr-3 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <div>
                <h3 className="text-red-800 font-semibold mb-1">
                  Required Fields Missing
                </h3>
                <p className="text-red-700 text-sm">
                  {errorMessage ||
                    "Please fill in all required fields marked with * before proceeding."}
                </p>
              </div>
              <button
                onClick={() => setShowError(false)}
                className="ml-auto text-red-500 hover:text-red-700"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
        {/* Header */}
        <div className="text-center mb-10 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
            Student Application Form
          </h1>
          <p className="text-gray-600 text-lg">
            Complete all sections to submit your application
          </p>
        </div>
        {/* Progress Bar / Stepper */}
        <div className="flex items-center justify-center my-8 max-w-xs mx-auto">
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-gray-500 mb-1">Page</span>
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                currentStep >= 1
                  ? "bg-[#5157a4] text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              1
            </div>
          </div>
          <div className="w-36 h-[2px] bg-gray-300 mx-3"></div>
          <div className="flex flex-col items-center">
            <span className="text-xs font-medium text-gray-500 mb-1">
              Finish
            </span>
            <div
              className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs ${
                currentStep >= 2
                  ? "bg-[#5157a4] text-white"
                  : "bg-gray-300 text-gray-600"
              }`}
            >
              {currentStep >= 2 ? "✓" : ""}
            </div>
          </div>
        </div>

        {currentStep === 1 && (
          <>
            {/* 1. Document Checklist for Application */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-8 overflow-hidden">
              <div className="bg-[#5157a4] px-5 py-3">
                <h2 className="text-xl font-bold text-white">
                  Document Checklist for Application
                </h2>
              </div>

              <div className="p-6 space-y-6">
                {/* Passport */}
                <div>
                  <h3 className="font-bold text-gray-700 mb-3 text-sm">
                    Passport
                  </h3>
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.passportCopy}
                      onChange={() => handleCheckboxChange("passportCopy")}
                      className="mt-1 w-4 h-4 text-[#5157a4] border-gray-300 rounded-sm focus:ring-[#5157a4]"
                    />
                    <span className="text-sm text-gray-700">
                      Copy of current visa (if you are in Australia) Copy of the
                      Passport - front and back
                    </span>
                  </label>
                </div>

                {/* Academic Documents */}
                <div>
                  <h3 className="font-bold text-gray-700 mb-3 text-sm">
                    Academic Documents
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.certifiedAcademicRecords}
                        onChange={() =>
                          handleCheckboxChange("certifiedAcademicRecords")
                        }
                        className="mt-1 w-4 h-4 text-[#5157a4] border-gray-300 rounded-sm focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">
                        Certified copies of relevant academic records in your
                        home country, such as high school or college/university
                        certificates
                      </span>
                    </label>

                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.australianAcademicRecords}
                        onChange={() =>
                          handleCheckboxChange("australianAcademicRecords")
                        }
                        className="mt-1 w-4 h-4 text-[#5157a4] border-gray-300 rounded-sm focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">
                        Certified copies of relevant academic records in
                        Australia, such as high school or college/university
                        certificates (if relevant)
                      </span>
                    </label>

                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.currentCOE}
                        onChange={() => handleCheckboxChange("currentCOE")}
                        className="mt-1 w-4 h-4 text-[#5157a4] border-gray-300 rounded-sm focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">Current COE</span>
                    </label>
                  </div>
                </div>

                {/* English Proficiency Documents */}
                <div>
                  <h3 className="font-bold text-gray-700 mb-3 text-sm">
                    English Proficiency Documents
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.coeRTO}
                        onChange={() => handleCheckboxChange("coeRTO")}
                        className="mt-1 w-4 h-4 text-[#5157a4] border-gray-300 rounded-sm focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">
                        COE from current RTO to prove you have completed at
                        least 6 months of a Certificate IV level course in an
                        Australian RTO
                      </span>
                    </label>

                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.letterOfOffer}
                        onChange={() => handleCheckboxChange("letterOfOffer")}
                        className="mt-1 w-4 h-4 text-[#5157a4] border-gray-300 rounded-sm focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">
                        Copy of the Letter of Offer or COE - Confirmation of
                        Enrolment of the ELICOS course
                      </span>
                    </label>

                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.englishTest}
                        onChange={() => handleCheckboxChange("englishTest")}
                        className="mt-1 w-4 h-4 text-[#5157a4] border-gray-300 rounded-sm focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">
                        If you have completed an approved English Language Test
                        such as IELTS, TOEFL or PTE, please submit the
                        certificate
                      </span>
                    </label>
                  </div>
                </div>

                {/* Other required Documents Offshore applications */}
                <div>
                  <h3 className="font-bold text-gray-700 mb-3 text-sm">
                    Other required Documents Offshore applications
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.qteAssessment}
                        onChange={() => handleCheckboxChange("qteAssessment")}
                        className="mt-1 w-4 h-4 text-[#5157a4] border-gray-300 rounded-sm focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">
                        GTE assessment form
                      </span>
                    </label>

                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.curriculumVitae}
                        onChange={() => handleCheckboxChange("curriculumVitae")}
                        className="mt-1 w-4 h-4 text-[#5157a4] border-gray-300 rounded-sm focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">
                        Curriculum Vitae (Work)
                      </span>
                    </label>

                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.references}
                        onChange={() => handleCheckboxChange("references")}
                        className="mt-1 w-4 h-4 text-[#5157a4] border-gray-300 rounded-sm focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">References</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Student Details */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-8 overflow-hidden">
              <div className="bg-[#5157a4] px-5 py-3">
                <h2 className="text-xl font-bold text-white">
                  Student Details
                </h2>
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-600 mb-6">
                  Read this application carefully, complete all sections and
                  ensure that supporting documents are attached.
                </p>

                {/* Current Location */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Current Location <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="currentLocation"
                        value="onshore"
                        checked={formData.currentLocation === "onshore"}
                        onChange={(e) =>
                          handleInputChange("currentLocation", e.target.value)
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">Onshore</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="currentLocation"
                        value="offshore"
                        checked={formData.currentLocation === "offshore"}
                        onChange={(e) =>
                          handleInputChange("currentLocation", e.target.value)
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">Offshore</span>
                    </label>
                  </div>
                </div>

                {/* Applicant Type */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Applicant type <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="applicantType"
                        value="domestic"
                        checked={formData.applicantType === "domestic"}
                        onChange={(e) =>
                          handleInputChange("applicantType", e.target.value)
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">
                        Domestic (VOE)
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="applicantType"
                        value="international"
                        checked={formData.applicantType === "international"}
                        onChange={(e) =>
                          handleInputChange("applicantType", e.target.value)
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">
                        International (COE)
                      </span>
                    </label>
                  </div>
                </div>

                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Title
                    </label>
                    <select
                      value={formData.title}
                      onChange={(e) =>
                        handleInputChange("title", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                    >
                      <option value="Mr.">Mr.</option>
                      <option value="Mrs.">Mrs.</option>
                      <option value="Ms.">Ms.</option>
                      <option value="Mx.">Mx.</option>
                      <option value="Dr.">Dr.</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Given Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.givenName}
                      onChange={(e) =>
                        handleInputChange("givenName", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Middle Name
                    </label>
                    <input
                      type="text"
                      value={formData.middleName}
                      onChange={(e) =>
                        handleInputChange("middleName", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Family Name
                    </label>
                    <input
                      type="text"
                      value={formData.familyName}
                      onChange={(e) =>
                        handleInputChange("familyName", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                    />
                  </div>
                </div>

                {/* Date of Birth & Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Date of Birth <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) =>
                        handleInputChange("dateOfBirth", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      placeholder="E.g. john@doe.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4] placeholder-gray-400"
                    />
                  </div>
                </div>

                {/* Phones */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Mobile <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <CountryCodePicker
                        value={(formData as any).mobileCode || "+61"}
                        onChange={(code) =>
                          handleInputChange("mobileCode", code)
                        }
                      />
                      <input
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) =>
                          handleInputChange("mobile", e.target.value)
                        }
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-r-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Home Phone
                    </label>
                    <div className="flex">
                      <CountryCodePicker
                        value={(formData as any).homePhoneCode || "+61"}
                        onChange={(code) =>
                          handleInputChange("homePhoneCode", code)
                        }
                      />
                      <input
                        type="tel"
                        value={formData.homePhone}
                        onChange={(e) =>
                          handleInputChange("homePhone", e.target.value)
                        }
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-r-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                      />
                    </div>
                  </div>
                </div>

                {/* Address Fields */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Street Number
                  </label>
                  <input
                    type="text"
                    value={formData.streetNumber}
                    onChange={(e) =>
                      handleInputChange("streetNumber", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Street Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.streetName}
                    onChange={(e) =>
                      handleInputChange("streetName", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      City <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) =>
                        handleInputChange("city", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      State/Province <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.stateProvince}
                      onChange={(e) =>
                        handleInputChange("stateProvince", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Postal Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.postalCode}
                      onChange={(e) =>
                        handleInputChange("postalCode", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Country <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.country}
                      onChange={(e) =>
                        handleInputChange("country", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                    >
                      <option value="Australia">Australia</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="India">India</option>
                      <option value="China">China</option>
                      <option value="Japan">Japan</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. CRICOS Related Details */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-8 overflow-hidden">
              <div className="bg-[#5157a4] px-5 py-3">
                <h2 className="text-xl font-bold text-white">
                  CRICOS Related Details
                </h2>
              </div>

              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Country of Citizenship{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.countryOfCitizenship}
                      onChange={(e) =>
                        handleInputChange(
                          "countryOfCitizenship",
                          e.target.value,
                        )
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Passport Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.passportNumber}
                      onChange={(e) =>
                        handleInputChange("passportNumber", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Visa Number
                  </label>
                  <input
                    type="text"
                    value={formData.visaNumber}
                    onChange={(e) =>
                      handleInputChange("visaNumber", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                  />
                </div>
              </div>
            </div>

            {/* 4. English Language Proficiency */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-8 overflow-hidden">
              <div className="bg-[#5157a4] px-5 py-3">
                <h2 className="text-xl font-bold text-white">
                  English Language Proficiency
                </h2>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    IELTS
                  </label>
                  <select
                    value={formData.ielts}
                    onChange={(e) => handleInputChange("ielts", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                  >
                    <option value="">Select</option>
                    <option value="1.0">1.0</option>
                    <option value="1.5">1.5</option>
                    <option value="2.0">2.0</option>
                    <option value="2.5">2.5</option>
                    <option value="3.0">3.0</option>
                    <option value="3.5">3.5</option>
                    <option value="4.0">4.0</option>
                    <option value="4.5">4.5</option>
                    <option value="5.0">5.0</option>
                    <option value="5.5">5.5</option>
                    <option value="6.0">6.0</option>
                    <option value="6.5">6.5</option>
                    <option value="7.0">7.0</option>
                    <option value="7.5">7.5</option>
                    <option value="8.0">8.0</option>
                    <option value="8.5">8.5</option>
                    <option value="9.0">9.0</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Date of Test
                  </label>
                  <input
                    type="date"
                    value={formData.dateOfTest}
                    onChange={(e) =>
                      handleInputChange("dateOfTest", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                  />
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mt-4">
                  *Please note that the Australian Sovereign College may require
                  you to undertake a Language Literacy and Numeracy (LLN) test
                  prior to your enrolment being processed and/or accepted. If
                  this is the case the Australian Sovereign College will contact
                  you after you have made application to organize a suitable
                  time with you to undertake the LLN test.
                </p>
              </div>
            </div>

            {/* 5. VET Related Details */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-8 overflow-hidden">
              <div className="bg-[#5157a4] px-5 py-3">
                <h2 className="text-xl font-bold text-white">
                  VET Related Details
                </h2>
              </div>

              <div className="p-6">
                {/* Gender */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="vetGender"
                        value="female"
                        checked={formData.vetGender === "female"}
                        onChange={(e) =>
                          handleInputChange("vetGender", e.target.value)
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">Female</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="vetGender"
                        value="male"
                        checked={formData.vetGender === "male"}
                        onChange={(e) =>
                          handleInputChange("vetGender", e.target.value)
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">Male</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="vetGender"
                        value="indeterminate"
                        checked={formData.vetGender === "indeterminate"}
                        onChange={(e) =>
                          handleInputChange("vetGender", e.target.value)
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">
                        Indeterminate/Intersex/Unspecified/Other
                      </span>
                    </label>
                  </div>
                </div>

                {/* Country of Birth */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Country of Birth <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.countryOfBirth}
                    onChange={(e) =>
                      handleInputChange("countryOfBirth", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                  />
                </div>

                {/* City of Birth */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    City of Birth
                  </label>
                  <input
                    type="text"
                    value={formData.cityOfBirth}
                    onChange={(e) =>
                      handleInputChange("cityOfBirth", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                  />
                </div>

                {/* Aust. Citizenship Status */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Aust. Citizenship Status{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.austCitizenshipStatus}
                    onChange={(e) =>
                      handleInputChange("austCitizenshipStatus", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                  >
                    <option value="">Select</option>
                    <option value="Australian Citizen">
                      Australian Citizen
                    </option>
                    <option value="New Zealand Citizen">
                      New Zealand Citizen
                    </option>
                    <option value="Australian Permanent Resident">
                      Australian Permanent Resident
                    </option>
                    <option value="Student Visa">Student Visa</option>
                    <option value="Temporary Resident Visa">
                      Temporary Resident Visa
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Aboriginal or Torres Strait Islander Origin */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Aboriginal or Torres Strait Islander Origin:{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="aboriginalTorresStrait"
                        value="no"
                        checked={formData.aboriginalTorresStrait === "no"}
                        onChange={(e) =>
                          handleInputChange(
                            "aboriginalTorresStrait",
                            e.target.value,
                          )
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="aboriginalTorresStrait"
                        value="yes-aboriginal"
                        checked={
                          formData.aboriginalTorresStrait === "yes-aboriginal"
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "aboriginalTorresStrait",
                            e.target.value,
                          )
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">
                        Yes Aboriginal
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="aboriginalTorresStrait"
                        value="yes-torres"
                        checked={
                          formData.aboriginalTorresStrait === "yes-torres"
                        }
                        onChange={(e) =>
                          handleInputChange(
                            "aboriginalTorresStrait",
                            e.target.value,
                          )
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">
                        Yes Torres Strait Islander
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="aboriginalTorresStrait"
                        value="both"
                        checked={formData.aboriginalTorresStrait === "both"}
                        onChange={(e) =>
                          handleInputChange(
                            "aboriginalTorresStrait",
                            e.target.value,
                          )
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">
                        Both Aboriginal and Torres Strait Islander
                      </span>
                    </label>
                  </div>
                </div>

                {/* Employment Status */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Employment Status <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.employmentStatus}
                    onChange={(e) =>
                      handleInputChange("employmentStatus", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                  >
                    <option value="">Select</option>
                    <option value="Full-time employee">
                      Full-time employee
                    </option>
                    <option value="Part-time employee">
                      Part-time employee
                    </option>
                    <option value="Self employed – not employing others">
                      Self employed – not employing others
                    </option>
                    <option value="Self employed – employing others">
                      Self employed – employing others
                    </option>
                    <option value="Employed – unpaid worker in a family business">
                      Employed – unpaid worker in a family business
                    </option>
                    <option value="Unemployed – seeking full-time work">
                      Unemployed – seeking full-time work
                    </option>
                    <option value="Unemployed – seeking part-time work">
                      Unemployed – seeking part-time work
                    </option>
                    <option value="Not employed – not seeking employment">
                      Not employed – not seeking employment
                    </option>
                  </select>
                </div>

                {/* Do you speak a language other than English at home? */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Do you speak a language other than English at home?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="languageOtherThanEnglish"
                        value="no"
                        checked={formData.languageOtherThanEnglish === "no"}
                        onChange={(e) =>
                          handleInputChange(
                            "languageOtherThanEnglish",
                            e.target.value,
                          )
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">
                        No, English only
                      </span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="languageOtherThanEnglish"
                        value="yes"
                        checked={formData.languageOtherThanEnglish === "yes"}
                        onChange={(e) =>
                          handleInputChange(
                            "languageOtherThanEnglish",
                            e.target.value,
                          )
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                  </div>
                </div>

                {/* Do you require English Assistance */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Do you require English Assistance{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="requireEnglishAssistance"
                        value="yes"
                        checked={formData.requireEnglishAssistance === "yes"}
                        onChange={(e) =>
                          handleInputChange(
                            "requireEnglishAssistance",
                            e.target.value,
                          )
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="requireEnglishAssistance"
                        value="no"
                        checked={formData.requireEnglishAssistance === "no"}
                        onChange={(e) =>
                          handleInputChange(
                            "requireEnglishAssistance",
                            e.target.value,
                          )
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                  </div>
                </div>

                {/* School level & year */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Highest COMPLETED school level{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.highestCompletedLevel}
                      onChange={(e) =>
                        handleInputChange(
                          "highestCompletedLevel",
                          e.target.value,
                        )
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                    >
                      <option value="">Select</option>
                      <option value="year-12">Year 12 or equivalent</option>
                      <option value="year-11">Year 11 or equivalent</option>
                      <option value="year-10">Year 10 or equivalent</option>
                      <option value="year-9">Year 9 or equivalent</option>
                      <option value="year-8">Year 8 or below</option>
                      <option value="never">Never attended school</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Year completed <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.yearCompleted}
                      onChange={(e) =>
                        handleInputChange("yearCompleted", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                    >
                      <option value="">Select</option>
                      {Array.from({ length: 55 }, (_, i) => 2024 - i).map(
                        (year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ),
                      )}
                    </select>
                  </div>
                </div>

                {/* Disabilities */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Disabilities <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="disabilities"
                        value="yes"
                        checked={formData.disabilities === "yes"}
                        onChange={(e) =>
                          handleInputChange("disabilities", e.target.value)
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="disabilities"
                        value="no"
                        checked={formData.disabilities === "no"}
                        onChange={(e) =>
                          handleInputChange("disabilities", e.target.value)
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="disabilities"
                        value="not-specified"
                        checked={formData.disabilities === "not-specified"}
                        onChange={(e) =>
                          handleInputChange("disabilities", e.target.value)
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">
                        Not specified
                      </span>
                    </label>
                  </div>
                </div>

                {/* Prior Education */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-2">
                    Prior Education <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="priorEducation"
                        value="yes"
                        checked={formData.priorEducation === "yes"}
                        onChange={(e) =>
                          handleInputChange("priorEducation", e.target.value)
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="priorEducation"
                        value="no"
                        checked={formData.priorEducation === "no"}
                        onChange={(e) =>
                          handleInputChange("priorEducation", e.target.value)
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">No</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="priorEducation"
                        value="not-specified"
                        checked={formData.priorEducation === "not-specified"}
                        onChange={(e) =>
                          handleInputChange("priorEducation", e.target.value)
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-sm text-gray-700">
                        Not specified
                      </span>
                    </label>
                  </div>
                </div>

                {/* Alternative Email Address */}
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Alternative Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.alternateEmail}
                    onChange={(e) =>
                      handleInputChange("alternateEmail", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                  />
                </div>
              </div>
            </div>

            {/* 6. Unique Student Identifier */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-8 overflow-hidden">
              <div className="bg-[#5157a4] px-5 py-3">
                <h2 className="text-xl font-bold text-white">
                  Unique Student Identifier
                </h2>
              </div>

              <div className="p-6">
                <p className="text-xs text-gray-700 mb-4 font-medium">
                  All students studying nationally recognised training in
                  Australia are required to have a Unique Student Identifier
                </p>

                <div className="mb-4">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Please Enter Your USI
                  </label>
                  <input
                    type="text"
                    value={formData.usi}
                    onChange={(e) => handleInputChange("usi", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                  />
                </div>

                <p className="text-xs text-gray-600">
                  If you do not have a USI, you can apply at{" "}
                  <a
                    href="https://www.usi.gov.au"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    www.usi.gov.au
                  </a>
                  . If you need help in applying for a USI then please speak
                  with someone from administration.
                </p>
              </div>
            </div>

            {/* 7. Emergency Contact information */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-8 overflow-hidden">
              <div className="bg-[#5157a4] px-5 py-3">
                <h2 className="text-xl font-bold text-white">
                  Emergency Contact information
                </h2>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.emergencyName}
                    onChange={(e) =>
                      handleInputChange("emergencyName", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Relationship <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.emergencyRelationship}
                    onChange={(e) =>
                      handleInputChange("emergencyRelationship", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex">
                    <CountryCodePicker
                      value={(formData as any).emergencyPhoneCode || "+61"}
                      onChange={(code) =>
                        handleInputChange("emergencyPhoneCode", code)
                      }
                    />
                    <input
                      type="tel"
                      value={formData.emergencyPhone}
                      onChange={(e) =>
                        handleInputChange("emergencyPhone", e.target.value)
                      }
                      className="flex-1 px-3 py-2 border border-gray-300 rounded-r-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Comments
                  </label>
                  <textarea
                    value={formData.emergencyComments}
                    onChange={(e) =>
                      handleInputChange("emergencyComments", e.target.value)
                    }
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4] resize-y"
                  />
                </div>
              </div>
            </div>

            {/* 8. Qualification Programs */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-8 overflow-hidden">
              <div className="bg-[#5157a4] px-5 py-3">
                <h2 className="text-xl font-bold text-white">
                  Qualification Programs
                </h2>
              </div>

              <div className="p-6">
                <p className="text-xs text-gray-600 mb-6">
                  Select the qualification for which you are filling the form
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">
                      Qualification Location{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-2 mb-6">
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="qualificationLocation"
                          value="melbourne"
                          checked={
                            formData.qualificationLocation === "melbourne"
                          }
                          onChange={(e) =>
                            handleInputChange(
                              "qualificationLocation",
                              e.target.value,
                            )
                          }
                          className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                        />
                        <span className="text-sm text-gray-700">Melbourne</span>
                      </label>
                      <label className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="radio"
                          name="qualificationLocation"
                          value="hobart"
                          checked={formData.qualificationLocation === "hobart"}
                          onChange={(e) =>
                            handleInputChange(
                              "qualificationLocation",
                              e.target.value,
                            )
                          }
                          className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                        />
                        <span className="text-sm text-gray-700">Hobart</span>
                      </label>
                    </div>

                    {/* Dynamic Select Department based on Location */}
                    <div>
                      <h4 className="text-xs font-bold text-gray-700 mb-3">
                        Select Department
                      </h4>

                      {formData.qualificationLocation === "melbourne" ? (
                        <div className="space-y-3">
                          {[
                            "ELICOS",
                            "Human Welfare Studies and Services",
                            "Building Trades",
                            "Automotive Engineering and Technology",
                            "Information Technology",
                            "Civil Engineering",
                            "Business and Management",
                            "Food And Hospitality",
                          ].map((dept) => (
                            <label
                              key={dept}
                              className="flex items-center space-x-3 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={formData.selectedDepartments.includes(
                                  dept,
                                )}
                                onChange={() => handleDepartmentToggle(dept)}
                                className="w-4 h-4 text-[#5157a4] border-gray-300 rounded-sm focus:ring-[#5157a4]"
                              />
                              <span className="text-sm text-gray-700">
                                {dept}
                              </span>
                            </label>
                          ))}
                          <p className="text-xs text-gray-500 mt-4 font-semibold">
                            Melbourne Campus
                          </p>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          {[
                            "Human Welfare Studies and Services",
                            "Business and Management",
                            "Building Trades",
                            "Food And Hospitality",
                          ].map((dept) => (
                            <label
                              key={dept}
                              className="flex items-center space-x-3 cursor-pointer"
                            >
                              <input
                                type="checkbox"
                                checked={formData.selectedDepartments.includes(
                                  dept,
                                )}
                                onChange={() => handleDepartmentToggle(dept)}
                                className="w-4 h-4 text-[#5157a4] border-gray-300 rounded-sm focus:ring-[#5157a4]"
                              />
                              <span className="text-sm text-gray-700">
                                {dept}
                              </span>
                            </label>
                          ))}
                          <p className="text-xs text-gray-500 mt-4 font-semibold">
                            Hobart Campus
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2">
                      Intake Date <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-3 gap-3">
                      <div>
                        <label className="block text-[11px] text-gray-600 mb-1">
                          Day <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.intakeDay}
                          onChange={(e) =>
                            handleInputChange("intakeDay", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                        >
                          <option value="">Select</option>
                          {Array.from({ length: 31 }, (_, i) =>
                            String(i + 1).padStart(2, "0"),
                          ).map((day) => (
                            <option key={day} value={day}>
                              {day}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] text-gray-600 mb-1">
                          Month <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.intakeMonth}
                          onChange={(e) =>
                            handleInputChange("intakeMonth", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                        >
                          <option value="">Select</option>
                          {Array.from({ length: 12 }, (_, i) =>
                            String(i + 1).padStart(2, "0"),
                          ).map((m) => (
                            <option key={m} value={m}>
                              {m}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-[11px] text-gray-600 mb-1">
                          Year <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.intakeYear}
                          onChange={(e) =>
                            handleInputChange("intakeYear", e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                        >
                          <option value="">Select</option>
                          {Array.from({ length: 27 }, (_, i) => 2024 + i).map(
                            (yr) => (
                              <option key={yr} value={String(yr)}>
                                {yr}
                              </option>
                            ),
                          )}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sub-options for selected departments */}
                {formData.selectedDepartments.length > 0 && (
                  <div className="space-y-6 pt-4 border-t border-gray-200 mt-6">
                    {formData.selectedDepartments.map((dept: string) => {
                      const courseGroups = DEPARTMENT_COURSES[dept] || [];
                      if (courseGroups.length === 0) return null;
                      return (
                        <div
                          key={dept}
                          className="bg-[#f8f9fa] border border-gray-200 rounded-sm p-5 animate-fade-in"
                        >
                          <h4 className="text-xs font-bold text-gray-800 mb-4 uppercase tracking-wide">
                            Select Course / Package for {dept}
                          </h4>
                          <div className="space-y-5">
                            {courseGroups.map((group, gIdx) => (
                              <div
                                key={`${dept}-${gIdx}`}
                                className="space-y-2"
                              >
                                <p className="text-xs font-bold text-gray-700">
                                  {group.category}
                                </p>
                                <div className="space-y-2.5 pl-2">
                                  {group.options.map((opt) => (
                                    <label
                                      key={opt}
                                      className="flex items-start space-x-3 cursor-pointer"
                                    >
                                      <input
                                        type="checkbox"
                                        checked={formData.selectedCourses.includes(
                                          opt,
                                        )}
                                        onChange={() => handleCourseToggle(opt)}
                                        className="w-4 h-4 text-[#5157a4] border-gray-300 rounded-sm focus:ring-[#5157a4] mt-0.5"
                                      />
                                      <span className="text-xs text-gray-700 leading-relaxed">
                                        {opt}
                                      </span>
                                    </label>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            {/* 9. RPL and Credit Transfer (CT) */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-8 overflow-hidden">
              <div className="bg-[#5157a4] px-5 py-3">
                <h2 className="text-xl font-bold text-white">
                  RPL and Credit Transfer (CT)
                </h2>
              </div>

              <div className="p-6">
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Are you applying for Credit Transfer for the units
                    successfully completed at another provider?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.creditTransfer}
                    onChange={(e) =>
                      handleInputChange("creditTransfer", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                  {formData.creditTransfer.toLowerCase() === "yes" && (
                    <p className="mt-4 text-sm text-[#5157a4]">
                      Your are require to fill in the{" "}
                      <a
                        href="#"
                        className="underline font-medium hover:text-[#434889]"
                      >
                        Credit Transfer Request Form
                      </a>
                    </p>
                  )}
                </div>

                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Are you applying for Recognition of Prior Learning(RPL){" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.rplRecognition}
                    onChange={(e) =>
                      handleInputChange("rplRecognition", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {/* Next Button */}
                <div className="flex justify-end pt-4">
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-8 py-2.5 bg-[#5157a4] text-white rounded-sm font-semibold text-sm hover:bg-[#434889] transition-all cursor-pointer shadow-sm"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </>
        )}

        {currentStep === 2 && (
          <>
            {/* 1. Overseas Student Health Cover (OSHC) */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-8 overflow-hidden">
              <div className="bg-[#5157a4] px-5 py-3">
                <h2 className="text-xl font-bold text-white">
                  Overseas Student Health Cover (OSHC)
                </h2>
              </div>

              <div className="p-6 text-xs text-gray-700 space-y-4">
                <p className="font-bold text-gray-900 text-sm">
                  If you want Australian Sovereign College to arrange OSHC on
                  your behalf, please advise the following details:
                </p>
                <p className="leading-relaxed">
                  It is an Australian Governments requirement that all
                  international students on a student visa must be covered by
                  Overseas Student Health Cover (OSHC). Payment of OSHC needs to
                  occur when you accept your offer. If you are accompanied by
                  family and children, you require the compulsory family policy
                  for OSHC. AuSC can arrange visa-length cover with our
                  preferred OSHC provider, upon request.
                </p>
                <p className="leading-relaxed">
                  As part of your enrolment process, we would like to confirm
                  your Overseas Student Health Cover (OSHC) arrangements. Please
                  review the options below and respond accordingly:
                </p>

                <div className="pt-2 mb-6">
                  <label className="block text-xs font-semibold text-gray-800 mb-1">
                    Would you like AUSC to arrange OSHC on your behalf?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.arrangeOSHC}
                    onChange={(e) =>
                      handleInputChange("arrangeOSHC", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h3 className="font-bold text-xs text-[#5157a4] mb-4">
                    If No, please provide your current OSHC details as below:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        OSHC Provider Name
                      </label>
                      <input
                        type="text"
                        value={formData.currentOSHCProvider}
                        onChange={(e) =>
                          handleInputChange(
                            "currentOSHCProvider",
                            e.target.value,
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Membership Number
                      </label>
                      <input
                        type="text"
                        value={formData.currentOSHCMembership}
                        onChange={(e) =>
                          handleInputChange(
                            "currentOSHCMembership",
                            e.target.value,
                          )
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Expiry
                      </label>
                      <input
                        type="date"
                        value={formData.currentOSHCExpiry}
                        onChange={(e) =>
                          handleInputChange("currentOSHCExpiry", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-200">
                  <h3 className="font-bold text-xs text-[#5157a4] mb-4">
                    If yes, please indicate the type of OSHC you require:
                  </h3>
                  <div className="flex space-x-6 mb-6">
                    {["Single", "Couple", "Family"].map((type) => (
                      <label
                        key={type}
                        className="flex items-center space-x-2 cursor-pointer"
                      >
                        <input
                          type="radio"
                          name="requiredOSHCType"
                          value={type.toLowerCase()}
                          checked={
                            formData.requiredOSHCType === type.toLowerCase()
                          }
                          onChange={(e) =>
                            handleInputChange(
                              "requiredOSHCType",
                              e.target.value,
                            )
                          }
                          className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                        />
                        <span className="text-xs text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>

                  <p className="text-xs text-gray-600 mb-4 italic">
                    Also, if you currently have any OSHC, kindly provide your
                    existing policy details (if available):
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        OSHC Provider Name
                      </label>
                      <input
                        type="text"
                        value={formData.newOSHCProvider}
                        onChange={(e) =>
                          handleInputChange("newOSHCProvider", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Membership Number
                      </label>
                      <input
                        type="text"
                        value={formData.newOSHCMembership}
                        onChange={(e) =>
                          handleInputChange("newOSHCMembership", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Expiry
                      </label>
                      <input
                        type="date"
                        value={formData.newOSHCExpiry}
                        onChange={(e) =>
                          handleInputChange("newOSHCExpiry", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  <h4 className="font-bold text-xs text-[#5157a4] mb-1">
                    Special Note:
                  </h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    AUSC will make every effort to find the most suitable OSHC
                    provider for you. However, we cannot guarantee a specific
                    provider of your choice.
                    <br />
                    Please note that this policy comes with an associated cost.
                  </p>
                </div>
              </div>
            </div>

            {/* 2. Are you ready to complete the course? */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-8 overflow-hidden">
              <div className="bg-[#5157a4] px-5 py-3">
                <h2 className="text-xl font-bold text-white">
                  Are you ready to complete the course?
                </h2>
              </div>

              <div className="p-6 text-xs text-gray-700">
                <p className="leading-relaxed mb-6">
                  <span className="font-bold text-gray-900">
                    The Australian Sovereign College has developed the following
                    checklist to see if you are ready to start your course.
                  </span>{" "}
                  This checklist may identify any English language, literacy and
                  numeracy (LLN) needs you may have.Please complete the
                  following suitability checklist:
                  <span className="font-bold text-[#5157a4]">
                    Rate yourself on the following tasks: Answer: Yes (I can do
                    this myself) or No (I need help to do this)
                  </span>
                </p>

                <h3 className="font-bold text-[#5157a4] text-sm mb-6">
                  I can...
                </h3>

                <div className="space-y-6">
                  {[
                    "Read the time on a clock (analogue and digital)",
                    "Add up prices of things in my head",
                    "Work out how much change I should give (without help from the register)",
                    "Look up a phone number in a telephone book or on the internet",
                    "Take a phone message and write it down accurately",
                    "Fill in a form (e.g. a timesheet for work)",
                    "Follow spoken instructions for a task",
                  ].map((task, idx) => (
                    <div
                      key={idx}
                      className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center pb-4 border-b border-gray-100 last:border-b-0"
                    >
                      <div className="md:col-span-6 font-medium text-gray-800 text-xs">
                        {task}
                      </div>
                      <div className="md:col-span-3">
                        <label className="block text-[11px] text-gray-600 mb-1">
                          In English? <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={(formData as any)[`lln${idx}_eng`] || ""}
                          onChange={(e) =>
                            handleInputChange(`lln${idx}_eng`, e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-xs focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                        >
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                      <div className="md:col-span-3">
                        <label className="block text-[11px] text-gray-600 mb-1">
                          In my first language{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={(formData as any)[`lln${idx}_lang`] || ""}
                          onChange={(e) =>
                            handleInputChange(`lln${idx}_lang`, e.target.value)
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-xs focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                        >
                          <option value="">Select</option>
                          <option value="yes">Yes</option>
                          <option value="no">No</option>
                        </select>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="leading-relaxed mt-8 mb-6 text-gray-600">
                  The Australian Sovereign College will review your answers to
                  this checklist and if needed arrange further assessments. We
                  will then let you know if there are any gaps in your LLN
                  skills and determine if you require additional assistance to
                  successfully complete your training course. This assistance
                  will be provided by our trainers, other training providers or
                  LLN specialists. Students are encouraged to discuss any LLN
                  concerns with the Administration Officer or their Trainer
                  prior to enrolment.
                </p>

                <div className="pt-4 border-t border-gray-200">
                  <label className="block text-xs font-semibold text-gray-800 mb-3">
                    Do you require language, literacy and/or numeracy support to
                    complete your studies at the Australian Sovereign College?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-6">
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="llnSupport"
                        value="yes"
                        checked={formData.llnSupport === "yes"}
                        onChange={(e) =>
                          handleInputChange("llnSupport", e.target.value)
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-xs text-gray-700">Yes</span>
                    </label>
                    <label className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="llnSupport"
                        value="no"
                        checked={formData.llnSupport === "no"}
                        onChange={(e) =>
                          handleInputChange("llnSupport", e.target.value)
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-xs text-gray-700">No</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Learning Materials */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-8 overflow-hidden">
              <div className="bg-[#5157a4] px-5 py-3">
                <h2 className="text-xl font-bold text-white">
                  Learning Materials
                </h2>
              </div>

              <div className="p-6">
                <p className="text-sm font-bold text-gray-900 leading-relaxed">
                  All required materials will be supplied by the Australian
                  Sovereign College unless otherwise stated in the course
                  information.
                </p>
              </div>
            </div>

            {/* 4. Quality Assurance */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-8 overflow-hidden">
              <div className="bg-[#5157a4] px-5 py-3">
                <h2 className="text-xl font-bold text-white">
                  Quality Assurance
                </h2>
              </div>

              <div className="p-6 text-xs text-gray-700">
                <p className="leading-relaxed mb-6 text-gray-600">
                  The Australian Sovereign College is externally audited at
                  regular intervals to ensure it can maintain its accreditation
                  as a Registered Training Organisation and/or CRICOS provider.
                  A part of this process involves an auditor contacting some of
                  the School’s past and current students.
                </p>

                <div>
                  <label className="block text-xs font-semibold text-gray-800 mb-3">
                    Please tick the box that reflects your participation
                    agreement or otherwise.{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="qualityAssurance"
                        value="agree"
                        checked={formData.qualityAssurance === "agree"}
                        onChange={(e) =>
                          handleInputChange("qualityAssurance", e.target.value)
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-xs text-gray-700">
                        I agree to be contacted
                      </span>
                    </label>
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="radio"
                        name="qualityAssurance"
                        value="disagree"
                        checked={formData.qualityAssurance === "disagree"}
                        onChange={(e) =>
                          handleInputChange("qualityAssurance", e.target.value)
                        }
                        className="w-4 h-4 text-[#5157a4] border-gray-300 focus:ring-[#5157a4]"
                      />
                      <span className="text-xs text-gray-700">
                        I do not want to be contacted
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* 5. Declaration */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-8 overflow-hidden">
              <div className="bg-[#5157a4] px-5 py-3">
                <h2 className="text-xl font-bold text-white">Declaration</h2>
              </div>

              <div className="p-6 text-xs text-gray-600">
                <div className="space-y-3.5 leading-relaxed">
                  <p>
                    • I have read, understood and completed the above
                    information correctly
                  </p>
                  <p>
                    • I understand that the payment I provide applies to the
                    course I have chosen, and I will be provided further
                    information from the Australian Sovereign College to
                    finalise my enrolment
                  </p>
                  <p>
                    • I acknowledge that providing false information and/or
                    failing to disclose any information relevant to my
                    application for enrolment and /or failure to complete an
                    application for enrolment form may result in the withdrawal
                    of any offer
                  </p>
                  <p>
                    • I understand that it is my responsibility to provide all
                    relevant and required documentation as specified in either
                    the domestic and/or the International Student flyer or
                    Prospectus – Please visit{" "}
                    <a
                      href="https://www.ausc.edu.au/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#5157a4] underline"
                    >
                      www.ausc.edu.au
                    </a>{" "}
                    for student prospectus.
                  </p>
                  <p>
                    • I confirm I am not currently enrolled with another RTO
                    unless allowed to do so.
                  </p>
                  <p>
                    • I can view current policies and procedures and I can
                    contact the Australian Sovereign College to request a copy
                    to be sent to me at any time
                  </p>
                  <p>
                    • Payment of fees will be included in the student enrolment
                    agreement letter once my application has been accepted
                  </p>
                  <p>
                    • I acknowledge I have read, understand and agree to the
                    Australian Sovereign College student refund policy – Please
                    visit{" "}
                    <a
                      href="https://www.ausc.edu.au/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#5157a4] underline"
                    >
                      www.ausc.edu.au
                    </a>{" "}
                    for Student Fees and Refund Policy.
                  </p>
                  <p>
                    • I acknowledge that I have read and understand the
                    Australian Sovereign College complaints and appeals policy –
                    Please visit{" "}
                    <a
                      href="https://www.ausc.edu.au/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#5157a4] underline"
                    >
                      www.ausc.edu.au
                    </a>{" "}
                    for Complaints and Appeals Policy.
                  </p>
                  <p>
                    • I understand that fees may be subject to change at any
                    time and I will be responsible for paying the amended amount
                    – Please visit{" "}
                    <a
                      href="https://www.ausc.edu.au/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#5157a4] underline"
                    >
                      www.ausc.edu.au
                    </a>{" "}
                    for Student Fees and Refund Policy.
                  </p>
                  <p>
                    • I understand that if the Australian Sovereign College
                    rejects my application before providing a student enrolment
                    agreement the application fee will not be refunded
                  </p>
                  <p>
                    • I understand that satisfactory course progression and
                    attendance is mandatory. For students on International
                    Student visas this may result with disciplinary action
                    involving the Department of Home Affairs – Please visit{" "}
                    <a
                      href="https://www.ausc.edu.au/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#5157a4] underline"
                    >
                      www.ausc.edu.au
                    </a>{" "}
                    for Attendance and Course Progress Policy.
                  </p>
                  <p>
                    • I will abide by the policies, procedures and any other
                    rules of the Australian Sovereign College whilst I am
                    studying. Please visit{" "}
                    <a
                      href="https://www.ausc.edu.au/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#5157a4] underline"
                    >
                      www.ausc.edu.au
                    </a>{" "}
                    for Student Code of Conduct Policy.
                  </p>
                  <p>
                    • I understand that plagiarism of someone else’s work is
                    against the Australian Sovereign College policy and if found
                    to have occurred will result in disciplinary action
                  </p>
                  <p>
                    • I have the financial capacity to meet tuition fees, and
                    agree to pay fees as they become due
                  </p>
                  <p>
                    • The Australian Sovereign College is required, under s19 of
                    the ESOS Act to report to the Secretary of the Department of
                    Education about changes to student’s enrolment; and any
                    breach by students of student visa conditions relating to
                    attendance or course progress
                  </p>
                  <p>
                    • I agree that the Australian Sovereign College may provide
                    my educational records or information to a sponsoring agency
                    or any other educational institution to which I apply
                  </p>
                  <p>
                    • I acknowledge and accept that during the course of my
                    study or during activity programs, I may be photographed,
                    videotaped or audio taped and I hereby grant the Australian
                    Sovereign College unrestricted and non-expiring permission
                    and all rights to use or license such media for any
                    advertising or promotional purposes that the Australian
                    Sovereign College may deem appropriate, without any
                    compensation whatsoever
                  </p>
                  <p>
                    • I declare that I will disclose to the Australian Sovereign
                    College any contagious medical condition that I might
                    contract prior to or during my stay at the Australian
                    Sovereign College and I agree to disclose any pre-existing
                    medical or health condition that may require ongoing or
                    intermittent medical attention or that may affect my ability
                    to fully participate in either classroom or activity
                    programs. I hereby authorise any doctor or medical facility
                    to provide treatment to me if I am injured or ill whether or
                    not I am able to provide consent.
                  </p>
                  <p>
                    • I agree and acknowledge that the Australian Sovereign
                    College may collect and retain personal information
                    including medical information as a result of this
                    application and/or my time at the Australian Sovereign
                    College and acknowledge that this information will only be
                    used in the course of the provision of educational,
                    ancillary and medical services either directly or indirectly
                    and for no other purposes
                  </p>
                  <p>
                    • I have read and understood the 2019 VET Data Policy1
                    Privacy Notice and Student Declaration. Please visit{" "}
                    <a
                      href="https://www.ausc.edu.au/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#5157a4] underline"
                    >
                      www.ausc.edu.au
                    </a>{" "}
                    for Privacy Notice and Student Declaration.
                  </p>
                  <p>
                    • For International students I understand that Information
                    is collected on this form and during my enrolment in order
                    to meet the Australian Sovereign College obligations under
                    the ESOS Act 2000 and the National Code 2018; to ensure my
                    compliance with the conditions of my visa and my obligations
                    under Australian immigration laws generally. The authority
                    to collect this information is contained in the Education
                    Services for Overseas Students Act 2000, the Education
                    Services for Overseas Students Regulations 2019 and the
                    National Code of Practice for Registration Authorities and
                    Providers of Education and Training to Overseas Students
                    2018. I understand that information collected about me on
                    this form and during my enrolment can be provided, in
                    certain circumstances, to the Australian Government and
                    designated authorities and, if relevant, the Tuition
                    Protection Scheme. In other instances, information collected
                    on this form or during my enrolment can be disclosed without
                    my consent where authorised or required by law.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="mb-6">
                    <label className="flex items-start space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.declarationAgree}
                        onChange={() =>
                          handleCheckboxChange("declarationAgree")
                        }
                        className="mt-0.5 w-4 h-4 text-[#5157a4] border-gray-300 rounded focus:ring-[#5157a4]"
                      />
                      <span className="text-xs font-bold text-gray-700">
                        I DECLARE I HAVE READ AND UNDERSTOOD THE ABOVE TERMS AND
                        CONDITIONS AND FULLY UNDERSTAND MY OBLIGATIONS AND THE
                        OBLIGATIONS OF MY TRAINING ORGANISATION.
                      </span>
                    </label>
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.fullName}
                      onChange={(e) =>
                        handleInputChange("fullName", e.target.value)
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Signature <span className="text-red-500">*</span>
                    </label>
                    <div className="relative border border-gray-300 rounded-sm bg-[#f9fafb] h-48">
                      <canvas
                        id="signatureCanvas"
                        className="w-full h-full cursor-crosshair"
                        onMouseDown={(e) => {
                          const canvas = e.currentTarget;
                          const rect = canvas.getBoundingClientRect();
                          const ctx = canvas.getContext("2d");
                          if (ctx) {
                            ctx.strokeStyle = "#000";
                            ctx.lineWidth = 2;
                            ctx.lineCap = "round";
                            ctx.beginPath();
                            ctx.moveTo(
                              e.clientX - rect.left,
                              e.clientY - rect.top,
                            );

                            const draw = (me: MouseEvent) => {
                              ctx.lineTo(
                                me.clientX - rect.left,
                                me.clientY - rect.top,
                              );
                              ctx.stroke();
                            };

                            const stopDrawing = () => {
                              window.removeEventListener("mousemove", draw);
                              window.removeEventListener(
                                "mouseup",
                                stopDrawing,
                              );
                            };

                            window.addEventListener("mousemove", draw);
                            window.addEventListener("mouseup", stopDrawing);
                          }
                        }}
                      />
                      <div className="absolute top-3 left-3 text-gray-400 text-xs pointer-events-none">
                        Start signing your signature here
                      </div>
                      <button
                        type="button"
                        onClick={() => {
                          const canvas = document.getElementById(
                            "signatureCanvas",
                          ) as HTMLCanvasElement;
                          const ctx = canvas?.getContext("2d");
                          if (ctx) {
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                          }
                        }}
                        className="absolute top-2 right-2 p-1.5 text-gray-500 hover:text-[#5157a4] transition-colors"
                        title="Clear signature"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 6. Application Information */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-8 overflow-hidden">
              <div className="bg-[#5157a4] px-5 py-3">
                <h2 className="text-xl font-bold text-white">
                  Application Information
                </h2>
              </div>

              <div className="p-6 text-xs text-gray-700">
                <div className="mb-6">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Are you represented by an agent?{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <select
                    value={formData.representedByAgent}
                    onChange={(e) =>
                      handleInputChange("representedByAgent", e.target.value)
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                  >
                    <option value="">Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                {formData.representedByAgent.toLowerCase() === "yes" && (
                  <div className="space-y-6 pt-2 border-t border-gray-200">
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Agent Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.agentEmail}
                        onChange={(e) =>
                          handleInputChange("agentEmail", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Agents Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.agentName}
                        onChange={(e) =>
                          handleInputChange("agentName", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Business Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.businessName}
                        onChange={(e) =>
                          handleInputChange("businessName", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 mb-1">
                        Student Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        value={formData.studentType}
                        onChange={(e) =>
                          handleInputChange("studentType", e.target.value)
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-sm text-gray-900 bg-[#f9fafb] focus:bg-white text-sm focus:outline-none focus:ring-1 focus:ring-[#5157a4]"
                      >
                        <option value="Onshore (Australia)">
                          Onshore (Australia)
                        </option>
                        <option value="Offshore">Offshore</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* 7. Upload */}
            <div className="bg-white border border-gray-300 rounded-sm shadow-sm mb-8 overflow-hidden">
              <div className="bg-[#5157a4] px-5 py-3">
                <h2 className="text-xl font-bold text-white">Upload</h2>
              </div>

              <div className="p-6 text-xs text-gray-700 space-y-6">
                {[
                  { id: "passportFile", label: "Passport", required: true },
                  {
                    id: "academicTranscriptFile",
                    label: "Academic transcripts/certificate",
                    required: true,
                  },
                  {
                    id: "englishLanguageFile",
                    label: "Evidence of English language",
                    required: false,
                  },
                  { id: "osidFile", label: "OSHC", required: false },
                  { id: "otherFile", label: "Other", required: false },
                ].map((upload) => (
                  <div key={upload.id}>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      {upload.label}{" "}
                      {upload.required && (
                        <span className="text-red-500">*</span>
                      )}
                    </label>
                    <div className="relative border border-dashed border-gray-300 rounded-xs p-6 text-center bg-[#f5f5f5] hover:bg-gray-100 transition-colors">
                      <input
                        type="file"
                        id={upload.id}
                        onChange={(e) =>
                          handleFileUpload(
                            upload.id,
                            e.target.files?.[0] || null,
                          )
                        }
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        accept=".pdf,.jpg,.jpeg,.png"
                      />
                      <div className="flex flex-col items-center justify-center">
                        <svg
                          className="w-8 h-8 text-gray-400 mb-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.5 3.5A1.5 1.5 0 017 2h6a1.5 1.5 0 011.5 1.5v3A1.5 1.5 0 0113 8H7a1.5 1.5 0 01-1.5-1.5v-3zM5.5 10A1.5 1.5 0 004 11.5v5A1.5 1.5 0 005.5 18h9a1.5 1.5 0 001.5-1.5v-5A1.5 1.5 0 0014.5 10h-9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <p className="text-xs text-gray-600">
                          Drag and Drop (or){" "}
                          <span className="text-[#0066cc] hover:underline cursor-pointer">
                            Choose Files
                          </span>
                        </p>
                        {formData[upload.id as keyof typeof formData] && (
                          <p className="text-xs text-green-600 mt-2 font-medium">
                            ✓{" "}
                            {
                              (
                                formData[
                                  upload.id as keyof typeof formData
                                ] as File
                              ).name
                            }
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* EFT Payment Details Sub-section */}
                <div className="pt-6 border-t border-gray-200">
                  <h3 className="font-bold text-xs text-gray-800 mb-3">
                    EFT Payment Details
                  </h3>
                  <div className="space-y-1.5 text-xs text-gray-700 leading-relaxed mb-4">
                    <p>Bank Name: Westpac</p>
                    <p>BSB: 037001 Account number: 774656</p>
                    <p>Account name: Australian Sovereign College PTY LTD</p>
                    <p>Swift Code: WPACAU2S</p>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-6">
                    Payment may be made by cash, credit card or bank transfer.
                    Payment must be made in full prior to commencement of
                    course.
                  </p>

                  <div className="space-y-4 text-xs text-gray-600 leading-relaxed">
                    <p>
                      Under the Data Provision Requirements 2012, Australian
                      Sovereign College is required to collect personal
                      information about you and to disclose that personal
                      information to the National Centre for Vocational
                      Education Research Ltd (NCVER). Your personal information
                      (including the personal information contained on this
                      enrolment form), may be used or disclosed by Australian
                      Sovereign College for statistical, administrative,
                      regulatory and research purposes. Australian Sovereign
                      College may disclose your personal information for these
                      purposes to:
                    </p>

                    <ul className="space-y-2 pl-4">
                      <li>
                        • Commonwealth and State or Territory government
                        departments and authorised agencies; and
                      </li>
                      <li>• NCVER.</li>
                      <li>
                        • Personal information that has been disclosed to NCVER
                        may be used or disclosed by NCVER for the following
                        purposes:
                      </li>
                      <li className="pl-4">
                        • populating authenticated VET transcripts;
                      </li>
                      <li className="pl-4">
                        • facilitating statistics and research relating to
                        education, including surveys and data linkage;
                      </li>
                      <li className="pl-4">
                        • pre-populating RTO student enrolment forms;
                      </li>
                      <li className="pl-4">
                        • understanding how the VET market operates, for policy,
                        workforce planning and consumer information; and
                      </li>
                      <li className="pl-4">
                        • administering VET, including program administration,
                        regulation, monitoring and evaluation.
                      </li>
                    </ul>

                    <p>
                      You may receive a student survey which may be administered
                      by a government department or NCVER employee, agent or
                      third- party contractor or other authorised agencies.
                      Please note you may opt out of the survey at the time of
                      being contacted.
                      <br />
                      NCVER will collect, hold, use and disclose your personal
                      information in accordance with the Privacy Act 1988 (Cth),
                      the National VET Data Policy and all NCVER policies and
                      protocols (including those published on NCVER's website at{" "}
                      <a
                        href="https://www.ncver.edu.au"
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#5157a4] underline"
                      >
                        www.ncver.edu.au
                      </a>
                      ).
                    </p>

                    <p>
                      The Privacy Notice at Schedule 1 of the National VET Data
                      Policy sets out privacy information a student needs to
                      know before they enrol with a registered training
                      organisation (RTO). The RTO is responsible for providing
                      this Privacy Notice to students, usually as part of the
                      enrolment process.
                      <br />
                      The Privacy Notice explains how personal information
                      provided by the student may be collected, held, used or
                      disclosed, together with training activity information. It
                      also assists to establish a student's expectations of how
                      their personal information and training data may be
                      handled.
                      <br />
                      The Privacy Notice also makes it clear that the Notice is
                      in addition to any other specific requirements RTOs are
                      obligated to provide to their students, for example, under
                      state or territory privacy laws. The following is minimum
                      mandatory content for inclusion in a Privacy Notice.
                    </p>
                  </div>
                </div>

                {/* Bottom Previous and Submit Action Buttons */}
                <div className="flex justify-between items-center pt-8 border-t border-gray-200 mt-8">
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentStep(1);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="px-8 py-2.5 bg-[#5157a4] text-white rounded-sm font-semibold text-sm hover:bg-[#434889] transition-all cursor-pointer shadow-sm"
                  >
                    Previous
                  </button>

                  <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={loading}
                    className="px-8 py-2.5 bg-[#5157a4] text-white rounded-sm font-semibold text-sm hover:bg-[#434889] transition-all cursor-pointer shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
