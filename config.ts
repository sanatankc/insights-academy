import campus1 from './src/images/campus/gas/gallery/1.jpeg';

// putting knk campus bg images here
import campusbg1 from './src/images/campus/knk/slides/1.jpeg';
import campusbg2 from './src/images/campus/knk/slides/2.jpeg';
import campusbg4 from './src/images/campus/knk/slides/4.jpeg';
import campusbg5 from './src/images/campus/knk/slides/5.jpeg';
import campusbg6 from './src/images/campus/knk/slides/6.jpeg';

import campusbg1Mb from './src/images/campus/knk/slides/mb/1.jpeg';
import campusbg2Mb from './src/images/campus/knk/slides/mb/2.jpeg';
import campusbg4Mb from './src/images/campus/knk/slides/mb/4.jpeg';
import campusbg5Mb from './src/images/campus/knk/slides/mb/5.jpeg';
import campusbg6Mb from './src/images/campus/knk/slides/mb/6.jpeg';

import principalknk from "./src/images/campus/knk/knk_principal.jpeg"
import kindergartenknk from "./src/images/campus/knk/kindergartenknk.jpeg"
import grade6knk from "./src/images/campus/knk/6-10knk.jpeg"
import grade1knk from "./src/images/campus/knk/1-5knk.jpeg"
import principalmrth from "./src/images/campus/marth/marth_principal.jpeg"

// putting marth campus bg images here
import marthcampusbg1 from './src/images/campus/marth/slides/1.jpeg';
import marthcampusbg2 from './src/images/campus/marth/slides/2.jpeg';
// import marthcampusbg3 from './src/images/campus/marth/slides/3.jpeg';
import marthcampusbg4 from './src/images/campus/marth/slides/4.jpeg';
import marthcampusbg5 from './src/images/campus/marth/slides/6.jpeg';

import marthcampusbgMb1 from './src/images/campus/marth/slides/mb/1.jpeg';
import marthcampusbgMb2 from './src/images/campus/marth/slides/mb/2.jpeg';
// import marthcampusbgMb3 from './src/images/campus/marth/slides/mb/3.jpeg';
import marthcampusbgMb4 from './src/images/campus/marth/slides/mb/4.jpeg';
import marthcampusbgMb5 from './src/images/campus/marth/slides/mb/6.jpeg';

import RoboticClass from "./src/images/campus/knk/facilities/robotics.jpeg";
import ComputerClass from "./src/images/campus/knk/facilities/preComputerClass.jpeg";
import KgClass from "./src/images/campus/knk/facilities/acitivitiesroom.jpeg";
import sports from "./src/images/campus/knk/facilities/sports.jpeg";
import zumba from "./src/images/campus/knk/facilities/zumba.jpeg";
import music from "./src/images/campus/knk/facilities/music.jpeg";

import RoboticClassmarth from "./src/images/campus/marth/facilities/robotics.webp";
import ComputerClassmarth from "./src/images/campus/marth/facilities/codingandcs.webp";
import KgClassmarth from "./src/images/campus/marth/facilities/acitivitiesroom.webp";
import sportsmarth from "./src/images/campus/marth/facilities/sports.webp";
import zumbamarth from "./src/images/campus/marth/facilities/zumba.webp";
import musicmarth from "./src/images/campus/marth/facilities/music.webp";


import testimonial1 from './src/images/testimonial/1.png';
import testimonial2 from './src/images/testimonial/2.png';
import testimonial3 from './src/images/testimonial/3.png';

import leadership1 from "./src/images/leadership/1.png"
import topper1 from "./src/images/campus/toppers/topper.png"
import topper2 from "./src/images/campus/toppers/topper2.png"
import topper3 from "./src/images/campus/toppers/topper3.png"
import topper4 from "./src/images/campus/toppers/topper4.png"


import kindergarten from "./src/images/campus/marth/academics/kindergarten.jpeg"
import primary from "./src/images/campus/marth/academics/1-5.jpeg"
import secondary from "./src/images/campus/marth/academics/6-8.jpg"
import highSchool from "./src/images/campus/marth/academics/9-10.jpeg"




type Campus = {
  title: string;
  description: string;
  hightlights?: string[];
  internalName: string;
  images: any;
  topHeading?: string;
  subHeading?: string;
  bgImage?: string;
  ctaText: string;
  leaderMessage?: LeaderMessage[];
  academic?: Academic[];
  facilities?: Facilities[];
  contact?: Contact;
  toppers?: Toppers[];
  admissionLink?: string;
};
export type ContactDetails = {
  label: string;
  value: string;
  type: 'contact' | 'mail' | 'address',
}

type Contact = {
  details: {
    [key: string]: ContactDetails | undefined; // Add index signature
    phoneNo?: ContactDetails;
    workingHours?: ContactDetails;
    address?: ContactDetails;
  };
  mapEmbedLink: string;
  mindlerLink?: string;
}

type Facilities = {
  title: string;
  description: string;
  images: string[];
  bgColor?: string;

}

type Academic = {
  title: string;
  description: string;
  images: string[];
  highlights?: string[];
}
type LeaderMessage = {
  image: string;
  name: string;
  role: string;
  body: string;
}


type Testimonial = {
  image: string;
  quote: string;
  ctaText?: string;
  ctaLink?: string;
  author?: string;
};

type School = {
  discription: string;
};

type Testimonials = {
  title: string;
  subtitle: string;
  data: Testimonial[];
};
type indexPage =  {
    hero : {
      title: string;
      subtitle: string; 
      bgImage: string;
      topHeading: string;
      description: string;
    }
}
type LeaderShipData = {
  name: string;
  role: string;
  image: string;
}
type LeaderShip = {
  data: {
    trustee: LeaderShipData[]
    government: LeaderShipData[]

  }
}
type Toppers = {
  name: string;
  ranks: string;
  marks: string;
  image: string;
}

interface Data {
  indexPage: indexPage;
  ctaLink: string;
  school: School;
  campus: Campus[];
  testimonials: Testimonials;
  leadership: LeaderShip; 
}

const data: Data = {
  
  ctaLink: 'https://parents.neverskip.com/',
  school: {
    discription: "Established in 2007, Insight Academy ranks among the best Bangalore schools, driven by 'Quality Education for All'. Our inclusive, secular approach goes beyond traditional classrooms, focusing on robust academics and holistic personal growth. As a leading institution, we prepare students for academic success and life beyond the classroom.",
    
  },
  campus: [
    {
      title: 'Kanakapura Campus (ICSE)',
      internalName: 'kanakapura',
      subHeading: 'Marathahalli Campus (CBSE)',
      topHeading: "Welcome to",
      description: 'Located near ISRO Layout amidst the lush greenery of South Banglore, we offer focussed learning in our ICSE affiliated institution.',
      admissionLink: "http://admissions.neverskip.com/6a572b6c322f61674d62684c7a334b7a6d364d755a673d3d/utms-723458We8&utmc-305639Sc9",
      images: [
        {type: 'picture', slide: [
          { src: campusbg1, media: "(min-width: 768px)", position: 'center 64%' },
          { src: campusbg1Mb, media: "(max-width: 768px)" },
        ], position: 'center 10%'},
        {type: 'picture', slide: [
          { src: campusbg2, media: "(min-width: 768px)", position: 'center 64%' },
          { src: campusbg2Mb, media: "(max-width: 768px)" },
        ], position: 'center 10%'},
        {type: 'picture', slide: [
          { src: campusbg4, media: "(min-width: 768px)", position: 'center 64%' },
          { src: campusbg4Mb, media: "(max-width: 768px)" },
        ], position: 'center 10%'},
        {type: 'picture', slide: [
          { src: campusbg5, media: "(min-width: 768px)", position: 'center 64%' },
          { src: campusbg5Mb, media: "(max-width: 768px)" },
        ], position: 'center 10%'},
        {type: 'picture', slide: [
          { src: campusbg6, media: "(min-width: 768px)", position: 'center 64%' },
          { src: campusbg6Mb, media: "(max-width: 768px)" },
        ], position: 'center 10%'},
      ],
      bgImage: campus1,
      ctaText: 'Explore Campus',
      leaderMessage: [
        {
          image: principalknk,
          name: "Mrs. May Ruth D'Souza",
          role: 'PRINCIPAL',
          body: "At Insight Academy, we're dedicated to offering quality education for every child, regardless of their abilities or challenges. We prioritize holistic development and our team of well-trained teachers go the extra mile to provide additional support. The strong partnership between students, parents, and the school lays the foundation for a brighter future."
        }
      ],
      academic: [
        {
          title: 'Kindergarten',
          description: 'Our Early Childhood Education (ECE) program, designed for 3 to 5-year-olds, goes beyond primary school preparation, focusing on holistic child development.',
          images: [kindergartenknk],
          highlights: [
           "25:1 Student-to-Teacher ratio",
           "Multi-sensory, experiential learning approach",
           "Emphasis on communication skills",
           "Extracurriculars activities like swimming, tennis, music & art"
          ],
        },
        {
          title: 'Grade 1-5',
          description: 'At Insight Academy, students from grade 1-5 are nurtured in an environment that is sensitive to their social and emotional needs, fostering them into compassionate individuals.',
          images: [grade1knk],
          highlights: [
            "Limited class sizes",
            "Innovative 'Creative Worksheet' monitoring",
            "Engaging physical and skill-based activities",
            "Experiential learning for lifelong passion."
           ],
        },
        {
          title: 'Grade 6-10',
          description: 'Preparation for board exams starts in grade 6 at Insight Academy, instilling not just academic rigor but also discipline, confidence, and time management skills.',
          images: [grade6knk],
          highlights: [
            "Focus is to prepare students for Grade 10",
            "Assessments would be 2 Tests & 2 exams/year",
            "NEP focused learning in Robotics & Commerce",
            "After-school activities focused on sports like Basketball, Football, Cricket & Swimming"
           ],
        },
      ],
      facilities: [
        {
          title: 'Robotics Class',
          description: "Unleash innovation at our school's robotics classes. With an exclusive robotics lab, students engage in immersive, practical learning, nurturing a passion for technology and problem-solving.",
          images: [RoboticClass],
          bgColor: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(245, 204, 79, 0.20) 100%);',
          
        },
        
        {
          title: 'Coding & CS Class',
          description: "Insight Academy integrates technology into education, offering computer learning with dedicated labs for both primary and senior grades. Each student has access to their individual computer, following a syllabus curated by expert computer educators.",
          images: [ComputerClass],
          
        },
        
        {
          title: 'Curiosity Room for KG',
          description: "Laughter and learning intertwine for our youngest explorers here. Bursting with playful adventures, this vibrant wonderland sparks joy, imagination, and endless learning.",
          images: [KgClass]
        },

        {
          title: 'Sports Academy',
          description: "Our comprehensive campus facilities encompass a diverse range of sports. With expert trainers, students can engage in activities like football, basketball, cricket, and more. Our dedicated sports academy includes options like table tennis, throwball, volleyball, skating and swimming! ",
          images: [sports]
        },

        {
          title: 'Yoga & Zumba',
          description: "Our experienced yoga instructors  guide students through each pose, and help understand the magic of breathing, stretching, and finding their inner calm. Students also get their groove on with our super fun Zumba sessions, where they can dance, sweat, and be fit while having an absolute blast!",
          images: [zumba]
        },

        {
          title: 'Music Classes',
          description: "Students unleash their musical potential with our diverse range of classes. From piano and guitar to drums, veena, and singing, our expert instructors help cultivate their passion, bringing melodies to life in an enriching and supportive environment. ",
          images: [music]
        }
      ],
      contact: {
        details: {
          phoneNo: {
            label: 'Call us On',
            value: '+91 80 26667333, +91 80 26667444',
            type: 'contact'
          },
          workingHours: {
            label: 'Mail us at',
            value: 'info@insightacademy.in',
            type: 'mail'
          },
          address: {
            label: 'We are here',
            value: '#20, Vasanthpura Main Road, Off Kanakapura Road, Bangalore – 560 062',
            type: 'address'
          }
        },
        mapLink: "https://maps.app.goo.gl/M1Hy8WB2h5nbsfto8",
        mapEmbedLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2290894404828!2d77.55730367661839!3d12.892985516593843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3fe19b3ba497%3A0x88e55fe492a8db63!2sInsight%20Academy!5e0!3m2!1sen!2sin!4v1694550190874!5m2!1sen!2sin',
        mindlerLink: 'https://www.mindler.com/schools/GLENTREE2023'
      },
      toppers: [
        {
          name: 'Aniksha <br> Raghuveera Kamat',
          ranks: 'Rank 1',
          marks: '97.8%',
          image: topper1,
        },
        {
          name: 'Hasini Gupta P S',
          ranks: 'Rank 2',
          marks: '97.2%',
          image: topper2,
        },
        {
          name: 'Harsh Shalgar',
          ranks: 'Rank 3',
          marks: '96.4%',
          image: topper3,
        },
        {
          name: 'Anshul A Gadgoli',
          ranks: 'Rank 3',
          marks: '96.4%',
          image: topper4,
        },
      ]
      
    },

    {
      title: 'Marathahalli (CBSE)',
      internalName: 'marathahalli',
      subHeading: 'Marathahalli Campus (CBSE)',
      topHeading: "Welcome to",
      description: 'Situated in the heart of Marathahalli, we offer a comprehensive CBSE-affiliated education framework.',
      admissionLink: "http://admissions.neverskip.com/6d652f7056524f56505837546f7352713344577770673d3d/utms-723458We8&utmc-305639Sc9",
      images: [
        {type: 'picture', slide: [
          { src: marthcampusbg1, media: "(min-width: 768px)", position: 'center 64%' },
          { src: marthcampusbgMb1, media: "(max-width: 768px)" },
        ], position: 'center 10%'},
        {type: 'picture', slide: [
          { src: marthcampusbg2, media: "(min-width: 768px)", position: 'center 64%' },
          { src: marthcampusbgMb2, media: "(max-width: 768px)" },
        ], position: 'center 10%'},
        {type: 'picture', slide: [
          { src: marthcampusbg4, media: "(min-width: 768px)", position: 'center 64%' },
          { src: marthcampusbgMb4, media: "(max-width: 768px)" },
        ], position: 'center 10%'},
        {type: 'picture', slide: [
          { src: marthcampusbg5, media: "(min-width: 768px)", position: 'center 64%' },
          { src: marthcampusbgMb5, media: "(max-width: 768px)" },
        ], position: 'center 10%'},
      ],
      bgImage: campus1,
      ctaText: 'Explore Campus',
      leaderMessage: [
        {
          image: principalmrth,
          name: 'Mrs. Ramola Melita Dsouza',
          role: 'PRINCIPAL',
          body: 'At Insight, we cherish creativity and critical thinking. Our mission is to cultivate happiness, peace, and harmony, preparing students for a dynamic world. Our dedicated teachers inspire students to explore beyond the classroom. With a holistic curriculum and co-curricular engagement, we foster values like honesty, empathy, and respect, shaping them into future global citizens.'
        }
      ],
      academic: [
        {
          title: 'Kindergarten',
          description: "Our kindergarten program, designed for children aged 3 to 5 years, plays a pivotal role in a child's development, often referred to as the 'foundation year'. At Insight Marathalli, we recognize its significance and provide a nurturing environment to foster cognitive, social, and emotional growth.",
          images: [kindergarten],
          highlights: [
            "Introduction to early literacy, numeracy, and critical thinking",
            "Multi-sensory, experiential learning approach",
            "Emphasis on communication skills",
            "Encouragement of independence and responsibility",
            "Engaging extracurricular activities including swimming, music, and art",
           


          ],
        },
        {
          title: 'Elementary (1-5)',
          description: "Elementary education at Insight lays the cornerstone of a child's learning journey, fostering vital skills for personal development and future success. The Formative Years, spanning grades 1 to 5, introduce fundamental subjects—mathematics, science, language arts, and social studies—forming a robust academic foundation for advanced learning.",
          images: [primary],
          highlights: [
            "Emphasis on literacy, critical thinking, and problem-solving",
            "Innovative Creative Worksheet monitoring",
            "Engaging physical and skill-based activities",
            "Fostering character and core values: honesty, respect, and empathy",
           ],
        },
        {
          title: 'Higher Primary (6-8)',
          description: "Insight's higher primary phase builds upon elementary foundations, preparing students for secondary education. Rigorous academics blend with character development and essential life skills. Through a nurturing environment, Insight empowers lifelong learners and responsible, contributing citizens, shaping the leaders of tomorrow.",
          images: [secondary],
          highlights: [
            "Rigorous academic preparation for secondary education",
            "NEP focused learning in Robotics",
            "Personal growth, character development, and life skills",
            "After-school activities focused on sports like Basketball, Football, Cricket & Swimming",
           ],
        },
        {
          title: 'High School (9-10)',
          description: "Insight's high school phase is a transformative period, guiding students from childhood to adulthood. Our rigorous academic program readies them for higher education and professional challenges. This nurturing environment fosters personal and academic growth, promising a bright future.",
          images: [highSchool],
          highlights: [
            "Rigorous academic curriculum for higher education readiness",
            "Emphasis on character, leadership, and core values",
            "Career exploration and critical life skills",
            "After-school activities including robotics, basketball, football, cricket, and swimming",
           ],
        },
      ],
      facilities: [
        {
          title: 'Robotics Class',
          description: "Unleash innovation at our school's robotics classes. With an exclusive robotics lab, students engage in immersive, practical learning, nurturing a passion for technology and problem-solving.",
          images: [RoboticClassmarth],
          bgColor: 'linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(245, 204, 79, 0.20) 100%);',
          
        },
        
        {
          title: 'Coding & CS Class',
          description: "Insight Academy integrates technology into education, offering computer learning with dedicated labs for both primary and senior grades. Each student has access to their individual computer, following a syllabus curated by expert computer educators.",
          images: [ComputerClassmarth],
          
        },
        
        {
          title: 'Curiosity Room for KG',
          description: "Laughter and learning intertwine for our youngest explorers here. Bursting with playful adventures, this vibrant wonderland sparks joy, imagination, and endless learning.",
          images: [KgClassmarth]
        },

        {
          title: 'Sports Academy',
          description: "Our comprehensive campus facilities encompass a diverse range of sports. With expert trainers, students can engage in activities like football, basketball, cricket, and more. Our dedicated sports academy includes options like table tennis, throwball, volleyball, skating and swimming! ",
          images: [sportsmarth]
        },

        {
          title: 'Yoga & Zumba',
          description: "Our experienced yoga instructors  guide students through each pose, and help understand the magic of breathing, stretching, and finding their inner calm. Students also get their groove on with our super fun Zumba sessions, where they can dance, sweat, and be fit while having an absolute blast!",
          images: [zumbamarth]
        },

        {
          title: 'Music Classes',
          description: "Students unleash their musical potential with our diverse range of classes. From piano and guitar to drums, veena, and singing, our expert instructors help cultivate their passion, bringing melodies to life in an enriching and supportive environment. ",
          images: [musicmarth]
        }
      ],
      contact: {
        details: {
          phoneNo: {
            label: 'Phone No',
            value: '+91 89717 77444, +91 89717 77333',
            type: 'contact'
          },
          workingHours: {
            label: 'Mail us at',
            value: 'info@insightacademy.in',
            type: 'mail'
          },
          address: {
            label: 'We are here',
            value: 'Opp. Prestige Tech Park, Off. Marathahalli – Sarjapura Outer Ring Road, Kadubeesanahalli, Marathahalli, Bangalore – 560 103',
            type: 'address'
          }
        },
        mapLink: "https://maps.app.goo.gl/ms3LtdJbJEHT9ByF8",
        mapEmbedLink: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124455.25147306037!2d77.4774783226767!3d12.893145184611434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae124cb9470d67%3A0x3e746feb4a1d3908!2sInsight%20Academy%20School%20Bangalore!5e0!3m2!1sen!2sin!4v1694550265537!5m2!1sen!2sin',
        mindlerLink: 'https://www.mindler.com/schools/GLENTREE2023'
      },
      toppers: [
        {
          name: 'Aniksha <br> Raghuveera Kamat',
          ranks: 'Rank 1',
          marks: '98.8%',
          image: topper1,
        },
        {
          name: 'Anshul A Gadgoli',
          ranks: 'Rank 2',
          marks: '98.8%',
          image: topper2,
        },
        {
          name: 'Harsh Shalgar',
          ranks: 'Rank 3',
          marks: '98.8%',
          image: topper3,
        },
        {
          name: 'Hasini Gupta P S',
          ranks: 'Rank 4',
          marks: '98.8%',
          image: topper4,
        },
      ]
      
    },
    
  ],
  testimonials: {
    title: 'Insight Voices',
    subtitle: 'Stories of Transformation and Growth',
    data: [
      // {
      //   image: testimonial3,
      //   quote: "For 12 years, Insight Academy has shaped our daughter into a well-rounded achiever. She's excelled in sports, academics, debates, culture, and inter-school competitions.",
      //   ctaText: 'Watch Video',
      //   ctaLink: '',
      // },
      {
        image: testimonial3,
        quote: "Since the last 12 years, Insight Academy has shaped our daughter into a multifaceted achiever. She has excelled in sports, academics and also in cultural activities. She has also brought accolades to the school in several inter-school competitions. A large part of the credit of her success goes to the encouragement given by the Principal and staff at Insight Academy.",
        author: '- BHANU MURTHY, PARENT OF VIBHA MURTHY (Grade 10)',
      },
      {
        image: testimonial2,
        quote: 'This school has helped me develop a wide range of skills and is also continuously motivating me to reach perfection in each field, which aids me in all aspects of life, from studying to sports.',
        author: '- Pramath K. Panyam (Grade 10)',
      },
      {
        image: testimonial1,
        quote: "The teachers and the whole environment here encourage you to push beyond your limits and that's why I feel like this is the perfect school for me! ",
        author: '- Abhirav S Kashyap (Grade 10)',

      },
    ],
  },
  leadership: {
    data: {
      trustee: [
        {
          name:"Mr. S. A. Wajid",
          role:"Trustee",
          image:leadership1
       },      
  {        name:"Mr. Malcolm Rohan D’souza",
          role:"Trustee",
          image:leadership1
       },      
        { 
          name:"Mrs Esha Hussain",
          role:"Trustee",
          image:leadership1
       },     
         {
          name:"Dr. Crystal D’souza",
          role:"Trustee",
          image:leadership1
       }
      ],
      government: [
        {
          name:"Mrs. May Ruth D’souza",
          role:"Governing Council",
          image:leadership1
       },
       {
          name:"Mrs. Rehana Shameem",
          role:"Governing Council",
          image:leadership1
       },
       {
          name:"Mr. S. A. Hussain",
          role:"Governing Council",
          image:leadership1
       },
       {
          name:"Mrs. Ramola Melita D'souza",
          role:"Governing Council",
          image:leadership1
       }
    ]
  }
}
};






export default data;