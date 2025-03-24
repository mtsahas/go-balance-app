import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Blog } from "./subcomponents/Blog";
import { Parentheses } from "lucide-react";

export function Resources() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  const books = [
    {
      path: "/book1.jpg",
      link: "https://www.amazon.com/When-Brain-Cant-Hear-Unraveling/dp/0743428641",
    },
    {
      path: "/book2.jpg",
      link: "https://www.amazon.com/Sound-Hope-Recognizing-Treating-Processing/dp/0345512189",
    },
    {
      path: "/book3.jpg",
      link: "https://www.amazon.com/Dont-Living-Auditory-Learning-Disabilities/dp/0984738010",
    },
    {
      path: "/book4.jpg",
      link: "https://www.amazon.com/Healing-Speed-Sound-Transforms-Brains/dp/1594630828",
    },
    {
      path: "/book5.jpg",
      link: "https://www.amazon.com/Thinking-About-You-Me/dp/0970132069",
    },
    {
      path: "/book6.jpg",
      link: "https://www.amazon.com/This-Your-Child-Discovering-Unrecognized/dp/0688086233",
    },
    {
      path: "/book7.jpg",
      link: "https://www.amazon.com/This-Your-Child-Doris-Rapp/dp/0688119077#:~:text=Doris%20Rapp%20offers%20a%20simple,feel%20unwell%20or%20act%20inappropriately.",
    },
    {
      path: "/book8.jpg",
      link: "https://www.amazon.com/Sound-Hope-Recognizing-Treating-Processing/dp/0345512189",
    },
    {
      path: "/book9.jpg",
      link: "https://www.amazon.com/When-Brain-Cant-Hear-Unraveling/dp/0743428641",
    },
    {
      path: "/book10.jpg",
      link: "https://www.amazon.com/Sound-Hope-Recognizing-Treating-Processing/dp/0345512189",
    },
    {
      path: "/book11.jpg",
      link: "https://www.amazon.com/When-Brain-Cant-Hear-Unraveling/dp/0743428641",
    },
    {
      path: "/book12.jpg",
      link: "https://www.amazon.com/Sound-Hope-Recognizing-Treating-Processing/dp/0345512189",
    },
    {
      path: "/book13.jpg",
      link: "https://www.amazon.com/Sound-Hope-Recognizing-Treating-Processing/dp/0345512189",
    },
    {
      path: "/book14.jpg",
      link: "https://www.amazon.com/Sound-Hope-Recognizing-Treating-Processing/dp/0345512189",
    },
  ];

  const websites = [
    {
      section: "Auditory Processing/Hearing/Speech-Language",
      links: [
        {
          title: "National Coalition for Auditory Processing Disorders",
          url: "https://www.ncapd.org/",
        },
        { title: "APD Support", url: " https://www.apdsupport.com/" },
        {
          title:
            "Hearing and Balance Symptoms and Conditions - The American Academy of Audiology",
          url: "https://www.audiology.org/consumers-and-patients/hearing-and-balance/",
        },
        {
          title:
            "Language, Swallowing, and Hearing Information and Resources (asha.org)",
          url: "https://www.asha.org/public/early-identification-of-speech-language-and-hearing-disorders/?srsltid=AfmBOope6l_p49QrwVFDLad1Q72_T4abgQTdfDF7BKYN3q9grfeZrzJ_",
        },
      ],
    },
    {
      section: "Executive Functioning",
      links: [
        { title: "Seth Perler", url: "https://sethperler.com/Sethperler.com/" },
        {
          title: "Cognitive Connections",
          url: "https://www.efpractice.com/about-5-1",
        },
      ],
    },
    {
      section: "Movement",
      links: [
        {
          title: "Daily Exercise Ideas for Children with ADHD",
          url: "https://www.additudemag.com/slideshows/exercise-ideas-for-kids-with-adhd-movement-for-focus/",
        },
      ],
    },
    {
      section:
        "Parent resources for neurodevelopmental disorders:  Root Causes/Nutrition/Environment/Treatments",
      links: [
        {
          title: "Documenting Hope",
          url: "https://documentinghope.com/",
        },
        {
          title: "Too Many Sick Children • Children's Health Defense",
          url: "https://childrenshealthdefense.org",
        },
        {
          title: "Neurodevelopmental Disorders | My Child Will Thrive",
          url: "https://mychildwillthrive.com",
        },
        {
          title: "Nicole Beurkens",
          url: "https://drbeurkens.com",
        },
        {
          title: "Special Education Teacher, Nutritionist, Psychologist",
          url: "https://www.mariarickerthong.com/",
        },
        {
          title: "Wellness Mama",
          url: "https://wellnessmama.com/",
        },
        {
          title: "ADHD:  Symptoms, Causes and Natural Support Strategies",
          url: "https://drjockers.com/adhd/",
        },
        {
          title: "Dr. Carolyn Dean MD ND",
          url: "https://drcarolyndean.com",
        },
        {
          title: "Home - Food Intolerance Network ",
          url: "https://www.fedup.com.au",
        },
        {
          title:
            "Nutrition and Therapeutic Diets for Children with Autism and ADHD",
          url: "nourishinghope.com",
        },
        {
          title: "Healing Without Hurting",
          url: "https://www.healingwithouthurting.com/our-story",
        },
        {
          title:
            "The Momologist™: Healing Common Childhood Illnesses with Dr. Sheila Kilbane",
          url: "https://open.spotify.com/episode/4IaaSHV20SHgeilHLAJm0g?autoplay=true",
        },
        {
          title: "Health Topics Archive - The Weston A. Price Foundation",
          url: "westonaprice.org",
        },
        {
          title: "Autism, ADHD, and Wireless Electromagnetic Fields",
          url: "https://ehtrust.org/key-issues/cell-phoneswireless/autism-adhd-wireless-electromagnetic-fields/",
        },
        {
          title: "Environmental Working Group",
          url: "https://www.ewg.org",
        },
      ],
    },
    {
      section: "Sensory Processing/Self-Regulation/Vestibular/Treatments",
      links: [
        {
          title: "STAR Institute",
          url: "https://sensoryhealth.org",
        },
        {
          title: "STAR Institute: Books, Products, and Online Tools",
          url: "https://www.spdstar.org/basic/books-products-and-online-tools",
        },
        {
          title: "Star Institute: Symptoms Checklist",
          url: "https://sensoryhealth.org/basic/symptoms-checklist",
        },
        {
          title:
            "STAR Institute: Sensory Integration & Processing Jargon Guide",
          url: "https://www.spdstar.org/sites/default/files/file-attachments/Sensory%20Integration%20%26%20Processing%20Jargon%20Guide%20-2020.pdf",
        },
        {
          title: "Spiral Foundation",
          url: "thesprialfoundation.org",
        },

        {
          title: "Sensory Smart Parent",
          url: "sensorysmartparent.com",
        },
        {
          title: "SPD Foundation",
          url: "https://www.spdfoundation.net",
        },
      ],
    },
    {
      section: "Vision",
      links: [
        {
          title:
            "Optometrists.org: Does My Child Have a Vision-Related Learning Difficulty?",
          url: "https://www.optometrists.org/childrens-vision/vision-for-school/does-your-child-have-a-learning-difficulty/#:~:text=Without%20visual%20integration%2C%20a%20child,may%20have%20a%20vision%20problem.",
        },
        {
          title: "Optometrists.org: The 17 Key Visual Skills",
          url: "https://www.optometrists.org/vision-therapy/guide-vision-and-learning-difficulties/the-17-key-visual-skills/",
        },
      ],
    },
  ];
  return (
    <div className="p-10 bg-blue-50">
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-center" id="books">
          Recommended Books
        </h1>
        <div className="p-3 flex flex-row flex-wrap flex-col gap-8">
          {books.map((book, index) => (
            <div key={index} className="p-3 h-70 w-50 sm:h-80 sm:w-60">
              <img
                className=" m-auto"
                src={book.path}
                alt={`Book ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div>
        <h1 className="text-3xl text-center font-bold" id="websites">
          Informational Websites
        </h1>
        {websites.map((item, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold mt-4">{item.section}</h2>
            <ul className="p-3 list-disc">
              {item.links.map((website, i) => (
                <li key={i} className="p-3 text-xl">
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:underline">
                    {website.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
