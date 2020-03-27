const ContactItems = [
  {
    id: 1,
    icon: 'map-marker-alt',
    text: ['Հայաստան,Երեվան Փ. Աբովյան 54', 'Армения,Ереван ул. Абовяна 54', 'Kazihata, Rajshahi']
  },
  {
    id: 2,
    icon: 'phone',
    text: `<p> +880-1714 475 325</p><p> +880-1515 262 238</p>`
  },
  {
    id: 3,
    icon: 'envelope',
    text: `hafizdr66@yahoo.com`
  }
];
export default function(state = ContactItems, action) {
  return state;
}
