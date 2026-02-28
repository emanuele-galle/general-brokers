import Layout from '@/components/Layout';
import GenericHero from '@/components/GenericHero';
import { FaEnvelope, FaBriefcase, FaUsers, FaGraduationCap } from 'react-icons/fa';

export default function LavoraConNoi() {
  return (
    <Layout
      title="Lavora Con Noi - General Brokers | Carriere nel Brokeraggio Assicurativo"
      description="Unisciti al team di General Brokers. Cerchiamo professionisti motivati nel settore assicurativo. Invia il tuo CV."
      keywords="lavora con noi, carriere assicurative, broker assicurativo lavoro, General Brokers Milano"
    >
      <GenericHero
        title="Lavora Con Noi"
        description="Entra a far parte di un team con oltre 47 anni di esperienza nel brokeraggio assicurativo."
      />

      {/* Content Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container-custom max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-900 mb-6">
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
            {[
              { icon: FaBriefcase, title: 'Professionalit\u00e0', desc: 'Un ambiente di lavoro serio e professionale, con attenzione alla crescita di ogni collaboratore.' },
              { icon: FaUsers, title: 'Lavoro di Squadra', desc: 'Collaborazione e supporto reciproco sono alla base del nostro modo di lavorare.' },
              { icon: FaGraduationCap, title: 'Formazione', desc: 'Investiamo nella formazione continua per garantire le competenze pi\u00f9 aggiornate del settore.' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="text-center">
                  <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="text-xl text-primary-600" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-secondary-900 mb-2">{item.title}</h3>
                  <p className="text-secondary-600">{item.desc}</p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="bg-secondary-50 rounded-xl p-8 md:p-12 text-center">
            <FaEnvelope className="text-3xl text-primary-600 mx-auto mb-4" />
            <h3 className="text-2xl font-heading font-bold text-secondary-900 mb-4">Invia la Tua Candidatura</h3>
            <p className="text-secondary-600 mb-6 max-w-2xl mx-auto">
              Se sei interessato a far parte del nostro team, inviaci il tuo curriculum vitae con una lettera
              di presentazione al seguente indirizzo email:
            </p>
            <a
              href="mailto:info@generalbrokers.it?subject=Candidatura%20-%20Lavora%20Con%20Noi"
              className="btn-primary inline-flex items-center gap-2"
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
