import adaLogo from "../assets/images/ADA-logo-705x219-1.png";
import cancerSocietyLogo from "../assets/images/American-Cancer-Society_logo-768x461.png";
import pcrmLogo from "../assets/images/Physicians-Committee-Logo-vertical-RGB-002-7.11.19-1500x801-1.png";

export default function CommunityPartners() {
  return (
    <section id="community-partners" className="pt-12 pb-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-4">Community Partners</h2>
          <div className="mx-auto w-24 h-1 bg-secondary mb-6"></div>
          <p className="max-w-5xl mx-auto text-lg text-gray-600 mb-6">
            Together, we believe that if you invest in people and make their lives better you can change the world. Our commitment to being a socially-responsible, eco-friendly impactful organization extends beyond one-off efforts. Our team is passionate about being a force for good.
            With Saladmaster, we are honored to partner with exceptional organizations that are making life better for people around the world. Are you ready to be a part of our Community?
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* ADA */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <img src={adaLogo} alt="American Diabetes Association logo" className="h-20 mb-4 object-contain" />
            <h3 className="font-heading font-semibold text-xl mb-2 text-center">American Diabetes Association®</h3>
            <p className="text-gray-600 text-sm mb-2 text-center">
              Saladmaster has joined the American Diabetes Association® as a proud National Sponsor of Together We Can Stop Diabetes® movement. As a new National Sponsor, Saladmaster is committed to supporting the ADA's efforts to educate the public about the devastating impact of diabetes and to encourage individuals, communities, corporations, and healthcare providers to take action in the fight to Stop Diabetes. Leveraging our mission to inspire people to eat better, live better, and achieve the life they desire, Saladmaster will serve as a Health & Wellness Booth Sponsor of ADA's local Tour de Cure and Step Out events in 2018 and 2019. Saladmaster is also a sponsor for ADA's Diabetes Food Hub. <a href="https://www.diabetes.org" target="_blank" rel="noopener noreferrer" className="text-primary underline">Learn more</a>.
            </p>
          </div>
          {/* American Cancer Society */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <img src={cancerSocietyLogo} alt="American Cancer Society logo" className="h-20 mb-4 object-contain" />
            <h3 className="font-heading font-semibold text-xl mb-2 text-center">American Cancer Society</h3>
            <p className="text-gray-600 text-sm mb-2 text-center">
              American Cancer Society is on a mission to free the world from cancer. Until they do, they will be funding and conducting research, sharing expert information, supporting patients, and spreading the word about cancer prevention. All so people can live longer — and better.<br /><br />
              Saladmaster is a proud sponsor of the American Cancer Society. Saladmaster Authorized Dealers host local cooking classes to teach how to cook certain foods to help prevent and fight cancer. <a href="https://www.cancer.org" target="_blank" rel="noopener noreferrer" className="text-primary underline">Learn more</a>.
            </p>
          </div>
          {/* PCRM */}
          <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center">
            <img src={pcrmLogo} alt="Physicians Committee for Responsible Medicine logo" className="h-20 mb-4 object-contain" />
            <h3 className="font-heading font-semibold text-xl mb-2 text-center">Physicians Committee for Responsible Medicine</h3>
            <p className="text-gray-600 text-sm mb-2 text-center">
              PCRM advances preventive medicine and good nutrition, conducts clinical research and encourages high research standards. Their team of physicians, nurses and dietitians help advance disease prevention and survival through nutrition education and research. Saladmaster's nutritional cooking system is used in PCRM's Food for Life nutrition and cooking classes to teach how certain foods and nutrients work together to discourage disease, along with cooking demonstrations of healthy and delicious recipes that can be recreated easily at home. <a href="https://www.pcrm.org" target="_blank" rel="noopener noreferrer" className="text-primary underline">Learn more</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 