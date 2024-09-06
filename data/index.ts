export const groupedCountryList = {
  type: 'group',
  data: [
    {
      title: 'Africa',
      items: [
        { value: 'eg', label: 'Egypt' },
        { value: 'ng', label: 'Nigeria' },
        { value: 'za', label: 'South Africa' },
        { value: 'ke', label: 'Kenya' },
        { value: 'gh', label: 'Ghana' },
        { value: 'et', label: 'Ethiopia' },
        { value: 'cm', label: 'Cameroon' },
        { value: 'ci', label: "Côte d'Ivoire" },
        { value: 'tz', label: 'Tanzania' },
        { value: 'ma', label: 'Morocco' },
      ],
    },
    {
      title: 'Asia',
      items: [
        { value: 'cn', label: 'China' },
        { value: 'in', label: 'India' },
        { value: 'jp', label: 'Japan' },
        { value: 'kr', label: 'South Korea' },
        { value: 'id', label: 'Indonesia' },
        { value: 'th', label: 'Thailand' },
        { value: 'vn', label: 'Vietnam' },
        { value: 'my', label: 'Malaysia' },
        { value: 'ph', label: 'Philippines' },
        { value: 'sg', label: 'Singapore' },
      ],
    },
    {
      title: 'Europe',
      items: [
        { value: 'de', label: 'Germany' },
        { value: 'fr', label: 'France' },
        { value: 'gb', label: 'United Kingdom' },
        { value: 'it', label: 'Italy' },
        { value: 'es', label: 'Spain' },
        { value: 'pl', label: 'Poland' },
        { value: 'nl', label: 'Netherlands' },
        { value: 'se', label: 'Sweden' },
        { value: 'no', label: 'Norway' },
        { value: 'ch', label: 'Switzerland' },
      ],
    },
    {
      title: 'North America',
      items: [
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' },
        { value: 'mx', label: 'Mexico' },
        { value: 'cu', label: 'Cuba' },
        { value: 'jm', label: 'Jamaica' },
        { value: 'ht', label: 'Haiti' },
        { value: 'do', label: 'Dominican Republic' },
        { value: 'gt', label: 'Guatemala' },
        { value: 'hn', label: 'Honduras' },
        { value: 'ni', label: 'Nicaragua' },
      ],
    },
    {
      title: 'South America',
      items: [
        { value: 'br', label: 'Brazil' },
        { value: 'ar', label: 'Argentina' },
        { value: 'co', label: 'Colombia' },
        { value: 'pe', label: 'Peru' },
        { value: 've', label: 'Venezuela' },
        { value: 'cl', label: 'Chile' },
        { value: 'ec', label: 'Ecuador' },
        { value: 'bo', label: 'Bolivia' },
        { value: 'py', label: 'Paraguay' },
        { value: 'uy', label: 'Uruguay' },
      ],
    },
    {
      title: 'Oceania',
      items: [
        { value: 'au', label: 'Australia' },
        { value: 'nz', label: 'New Zealand' },
        { value: 'fj', label: 'Fiji' },
        { value: 'pg', label: 'Papua New Guinea' },
        { value: 'sb', label: 'Solomon Islands' },
        { value: 'vu', label: 'Vanuatu' },
        { value: 'nc', label: 'New Caledonia' },
        { value: 'pf', label: 'French Polynesia' },
        { value: 'to', label: 'Tonga' },
        { value: 'ws', label: 'Samoa' },
      ],
    },
  ],
};

export const countryList = {
  type: 'list',
  data: groupedCountryList.data
    .map((group) => group.items.map((item) => item))
    .flat(),
};
