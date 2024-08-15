import Icon from "../components/atoms/Icon";
import { JusticeScale01Icon } from "hugeicons-react";
import Typography from "../components/atoms/Typography";
import image1 from "../assets/image1.jpg";
import image3 from "../assets/image3.jpg";
import image2 from "../assets/image2.jpg";
import image4 from "../assets/image4.jpeg";
import DomainCard from "../components/DomainCard";
import ArticleCard from "../components/atoms/ArticleCard";
import ReviewCarousel from "../components/ReviewCarousel";

import { domains } from "../data";
import { articles, reviews } from "../data";

function Home() {
  return (
    <section className=" flex flex-col gap-20 bg-primary text-light">
      <div
        style={{ backgroundImage: `url(${image3})` }}
        className="flex flex-col  w-full bg-no-repeat bg-cover justify-center items-center  md:h-screen "
      >
        <div className="flex flex-col gap-5 pt-52 items-center justify-center py-[100px] text-light backdrop-opacity-90 backdrop-invert-0 w-full h-full bg-primary/70 ">
          <Typography
            text="Votre Partenaire de Confiance en Droit et Gestion de Patrimoine"
            className="text-center font-medium text-2xl md:text-5xl lg:text-6xl lg:leading-[80px] mb-10 lg:w-4/5 "
          />
          <div className="flex gap-5">
            <button className="btn-grd rounded-full bg-primary  border border-vvbluedark hover:border-gold px-8 py-3 text-sm uppercase backdrop-sepia-   shadow-sm transition duration-500  ">
              Prendre un rendez-vous
            </button>
          </div>
        </div>
      </div>
      <section className="min-h-screen w-full py-20 px-10">
        <p className="text-6xl uppercase w-1/2 font-medium mb-14">
          Nos <span className="text-gold">domaines</span> d'intervention
        </p>
        <div className="flex gap-3 flex-wrap">
          {domains.map((item, index) => (
            <DomainCard
              key={index}
              name={item.name}
              title={item.title}
              description={item.description}
              icon={item.icon}
            />
          ))}
        </div>
      </section>
      <section className="min-h-screen w-full py-20 px-10">
        <p className="text-6xl uppercase w-1/2 font-medium mb-14">
          A propos de <span className="text-gold">moi</span>
        </p>
        <div className="flex gap-3  px-4">
          <div className="flex flex-col py-3 justify-between w-full text-[21px] font-[300] ">
            <p>
              Je suis CHENDJOU SERGE EMMANUEL, avocat au barreau du Cameroun
              spécialisé en droit des affaires, droits de l'homme, droit
              douanier et gestion du patrimoine. Avec plusieurs années
              d’expérience, je m’engage à fournir des solutions juridiques
              adaptées à vos besoins spécifiques. Mon approche centrée sur le
              client vise à défendre vos intérêts avec rigueur et intégrité.
              Contactez-moi pour une consultation afin que nous discutions de
              vos besoins juridiques.
            </p>
            <div>
              <button className=" rounded-full font-normal hover:bg-bluedark bg-gold px-8 py-3 text-sm text-vvbluedark hover:text-gold uppercase backdrop-sepia-   shadow-sm transition duration-500 ease-in-out ">
                Prendre un rendez-vous
              </button>
            </div>
          </div>
          <div className=" w-full  px-10 ">
            <img
              src={image4}
              alt=""
              className="rounded-xl object-cover w-full h-[400px] "
            />
          </div>
        </div>
      </section>
      <section className="min-h-screen w-full py-20 ">
        <p className="text-6xl uppercase w-1/2 px-10 font-medium mb-14">
          Ils nous ont fait <span className="text-gold">Confiance</span>
        </p>
        <ReviewCarousel reviews={reviews} />
      </section>
      <section className="min-h-screen w-full py-20 ">
        <p className="text-6xl px-10 uppercase w-1/2 font-medium mb-14">
          <span className="text-gold">articles</span> récents
        </p>
        <div className="flex   ">
          {articles.slice(0, 3).map((item, index) => (
            <ArticleCard
              key={index}
              image={item.image}
              title={item.title}
              date={item.date}
              author={item.author}
            />
          ))}
        </div>
        <div className="flex justify-end w-full px-10">
          <button className="mt-8 rounded-full bg-vvbluedark border border-bluedark hover:border-gold px-8 py-3 text-sm uppercase -   shadow-sm transition duration-500 ease-in-out ">
            TOUS LES ARTICLES
          </button>
        </div>
      </section>
    </section>
  );
}

export default Home;
