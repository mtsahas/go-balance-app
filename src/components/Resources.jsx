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
      path: "/water-book.jpg",
      // link: "https://www.amazon.com/Sound-Hope-Recognizing-Treating-Processing/dp/0345512189",
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
          title: "American Speech Language Hearing Association",
          url: "https://www.asha.org/public/",
        },
        {
          title: "National Coalition for Auditory Processing Disorders",
          url: "https://www.ncapd.org/",
        },
        { title: "APD Support", url: " https://www.apdsupport.com/" },
        {
          title: "The American Academy of Audiology",
          url: "https://www.audiology.org/consumers-and-patients/hearing-and-balance/auditory-processing-disorders/",
        },
      ],
    },
    {
      section: "Executive Functioning",
      links: [
        { title: "Seth Perler", url: "https://sethperler.com" },
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
      section: "Parent resources for neurodevelopmental disorders",
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
          title: "Dr. Nicole Beurkens: Nutritionist & Psychologist",
          url: "https://www.drbeurkens.com/a-holistic-approach-to-improving-adhd-symptoms-in-children-and-teens/",
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
          title: "Home - Food Intolerance Network ",
          url: "https://www.fedup.com.au",
        },
        {
          title:
            "Nutrition and Therapeutic Diets for Children with Autism and ADHD",
          url: "https://nourishinghope.com",
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
          url: "https://westonaprice.org",
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
      section: "Sensory Processing",
      links: [
        {
          title: "Star Institute: Symptoms Checklist",
          url: "https://sensoryhealth.org/basic/symptoms-checklist",
        },

        {
          title: "Spiral Foundation",
          url: "https://thespiralfoundation.org",
        },

        {
          title: "Sensory Smart Parent",
          url: "https://sensorysmartparent.com",
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
            "Does My Child Have a Vision-Related Learning Difficulty? (Optometrists.org)",
          url: "https://www.optometrists.org/childrens-vision/vision-for-school/does-your-child-have-a-learning-difficulty/#:~:text=Without%20visual%20integration%2C%20a%20child,may%20have%20a%20vision%20problem.",
        },
      ],
    },
  ];
  return (
    <div className="bg-white-50 w-screen">
      <div className="mb-10">
        <h1
          className="p-3 text-3xl text-sky-800 font-bold text-center"
          id="books">
          Books You May Find of Interest
        </h1>
        <div className="flex flex-row flex-wrap gap-1 sm:gap-8 text-center justify-center">
          {books.map((book, index) => (
            <div
              key={index}
              className="p-3 h-70 w-40 h-50 sm:w-50 sm:h-60 w-40 md:h-80 md:w-60">
              <img
                className=" m-auto"
                src={book.path}
                alt={`Book ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="p-5">
        <h1
          className="text-3xl text-center text-sky-800  font-bold"
          id="websites">
          Informational Websites
        </h1>
        {websites.map((item, index) => (
          <div className="px-10" key={index}>
            <h2 className="text-2xl text-emerald-800 font-bold mt-4">
              {item.section}
            </h2>
            <ul className="p-3 list-disc">
              {item.links.map((website, i) => (
                <li key={i} className="p-3 text-xl">
                  <a
                    href={website.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sky-800 hover:underline">
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
