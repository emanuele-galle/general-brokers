import Layout from '@/components/Layout';
import Image from 'next/image';
import { FaEnvelope, FaArrowRight, FaBriefcase, FaUsers, FaGraduationCap } from 'react-icons/fa';

export default function LavoraConNoi() {
  return (
    <Layout
      title="Lavora Con Noi - General Brokers | Carriere nel Brokeraggio Assicurativo"
      description="Unisciti al team di General Brokers. Cerchiamo professionisti motivati nel settore assicurativo. Invia il tuo CV."
      keywords="lavora con noi, carriere assicurative, broker assicurativo lavoro, General Brokers Milano"
    >
      {/* Hero Section */}
      <section className="relative text-white py-12 md:py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/office/office-3.jpg"
            alt="Ufficio General Brokers Milano - Lavora Con Noi"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900/95 via-secondary-800/90 to-primary-900/85"></div>
        </div>

        <div className="container-custom text-center relative z-10">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 md:mb-8 px-4">
            Lavora Con Noi
          </h1>
          <div className="w-16 md:w-20 h-1 bg-white/40 mx-auto mb-6 md:mb-8"></div>
          <p className="text-base md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed px-4">
            Entra a far parte di un team con oltre 47 anni di esperienza nel brokeraggio assicurativo.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
              Unisciti al Nostro Team
            </h2>
            <p className="text-lg text-secondary-600 leading-relaxed max-w-3xl mx-auto">
              General Brokers crede nelle persone. Dal 1977, il nostro successo si basa sulla competenza
              e la dedizione dei professionisti che lavorano con noi. Se condividi la nostra passione per
              il settore assicurativo e vuoi fare la differenza per i clienti, ci piacerebbe conoscerti.
            </p>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaBriefcase className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Professionalit&agrave;</h3>
              <p className="text-secondary-600">
                Un ambiente di lavoro serio e professionale, con attenzione alla crescita di ogni collaboratore.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Lavoro di Squadra</h3>
              <p className="text-secondary-600">
                Collaborazione e supporto reciproco sono alla base del nostro modo di lavorare.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <FaGraduationCap className="text-2xl text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-900 mb-2">Formazione</h3>
              <p className="text-secondary-600">
                Investiamo nella formazione continua per garantire le competenze pi&ugrave; aggiornate del settore.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-secondary-50 rounded-2xl p-8 md:p-12 text-center">
            <FaEnvelope className="text-4xl text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-secondary-900 mb-4">Invia la Tua Candidatura</h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              Se sei interessato a far parte del nostro team, inviaci il tuo curriculum vitae con una lettera
              di presentazione al seguente indirizzo email:
            </p>
            <a
              href="mailto:info@generalbrokers.it?subject=Candidatura%20-%20Lavora%20Con%20Noi"
              className="btn-primary inline-flex items-center gap-2 text-lg"
            >
              <FaEnvelope />
              info@generalbrokers.it
            </a>
            <p className="text-sm text-secondary-500 mt-4">
              Tutte le candidature saranno trattate con la massima riservatezza.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
