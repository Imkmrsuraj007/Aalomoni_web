import { GalleryPhoto } from '../types';
import karamImage from '../assets/karam.jpeg';
import tusuImage from '../assets/tusu.jpeg';
import sohraiImage from '../assets/sohrai.jpeg';
import sarhulImage from '../assets/sarhul.jpeg';

export const GALLERY_DATA: GalleryPhoto[] = [
  {
    id: 'g-1',
    title: 'The Resonance of the Mandar Drum',
    category: 'Music & Instruments',
    imageUrl: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=1200&q=80',
    caption: 'Handcrafted clay body with goat-skin heads and black tuning paste (Kharan), the soul of every Kudmali melody.',
    location: 'Purulia / Manbhum'
  },
  {
    id: 'g-2',
    title: 'Sacred Sal Grove & Sarhul Blossom Sanctuary',
    category: 'Festivals',
    imageUrl: sarhulImage,
    caption: 'Flowering Shorea robusta canopy and sacred Jahersthan altar decorated with terracotta monsoon prediction pots and fresh spring blossoms.',
    location: 'Dalma Hills, East Singhbhum'
  },
  {
    id: 'g-3',
    title: 'Karam Dance at the Village Akhra',
    category: 'Festivals',
    imageUrl: karamImage,
    caption: 'Women linking arms in the unbroken circle around the decorated Karam branch on Bhado Ekadashi.',
    location: 'Ranchi Plateau'
  },
  {
    id: 'g-4',
    title: 'Sohrai Wall Painting & Cattle Adornment',
    category: 'Art & Craft',
    imageUrl: sohraiImage,
    caption: 'Sacred zebu bull crowned with golden Dhankatti paddy sheaves before radiant ochre murals and glowing diyas on Kartik Amavasya.',
    location: 'Hazaribagh / Manbhum'
  },
  {
    id: 'g-5',
    title: 'Immersion of the Golden Chouradol',
    category: 'Festivals',
    imageUrl: tusuImage,
    caption: 'Handwoven bamboo shrines illuminated with oil lamps floating on the mist-covered Subarnarekha on Makar morning.',
    location: 'Subarnarekha River, Ghatshila'
  },
  {
    id: 'g-6',
    title: 'Earthen Courtyard & Morning Chores',
    category: 'Village Life',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80',
    caption: 'Freshly swept courtyard treated with cow-dung wash, drying paddy grain, and clay cooking pots.',
    location: 'Bokaro Rural Valley'
  },
  {
    id: 'g-7',
    title: 'Masks of the Purulia Chhau Dancers',
    category: 'Art & Craft',
    imageUrl: 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?auto=format&fit=crop&w=1200&q=80',
    caption: 'Clay and papier-mâché masks sculpted with fine mythological detailing by artisan families of Charida village.',
    location: 'Charida, Purulia'
  },
  {
    id: 'g-8',
    title: 'Traditional Aam-Biha Blessing',
    category: 'Ceremonies',
    imageUrl: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80',
    caption: 'The groom and family pledging stewardship to a fruiting mango tree before the wedding procession sets forth.',
    location: 'Dhanbad Outskirts'
  },
  {
    id: 'g-9',
    title: 'Harvesting Winter Paddy',
    category: 'Village Life',
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    caption: 'Golden sheaves of paddy gathered by hand before the arrival of Poush and Tusu celebrations.',
    location: 'Mayurbhanj Border'
  }
];
