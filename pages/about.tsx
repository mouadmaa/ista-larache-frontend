import { FC, Fragment } from 'react'
import Head from 'next/head'

import { AboutPageContent } from '@/components/Home/AboutSection/AboutSectionStyles'
import AboutSection from '@/components/Home/AboutSection/AboutSectionComponent'
import HeadingTertiary from '@/components/UI/Heading/HeadingTertiary/HeadingTertiaryComponent'
import HeaderSecondary from '../layout/HeaderSecondary/HeaderSecondaryComponent'

const About: FC = () => {
  return (
    <Fragment>
      <Head>
        <title>Propos | ISTA LARACHE</title>
      </Head>
      <HeaderSecondary
        textMain="à propos de ista larache"
        textSub="quelques informations sur les conditions d'accès à la formation, et comment s'inscrire dans l'établissement"
      />
      <AboutSection inPage />
      <AboutPageContent>
        <p>
          <strong>Type de Formation</strong> : Enseignement public
          professionnelle avec ateliers et instituts d’apprentissage
        </p>

        <p>
          <strong>Niveau</strong> : Baccalauréat, Niveau Baccalauréat, Qualification, Spécialisation, Bac Professionnel, Parcours Collégial, Formation Qualifiante
        </p>
        <p>
          <strong>Adresse</strong> : Rte de Rabat . Avenue Omar Ibn Abdelaziz
          B.P. 61\n92000 Larache
        </p>
        <p>
          <strong>Numéro de Téléphone</strong> : +212539912646
        </p>

        <HeadingTertiary
          text='Conditions d’accès OFPPT ISTA Larache:'
        />

        <h4>
          Niveau Technicien Spécialisé
        </h4>
        <p>
          – Titulaire du baccalauréat, ou d’un diplôme de Technicien reconnu par
          les pouvoirs publics
        </p>
        <p>
          – Etre âgé de 30 ans au maximum à la date d’inscription
        </p>
        <p>
          – L’accès aux filières est conditionné par un diplôme du baccalauréat
          pour les bacheliers, et un diplôme de la licence pour les licenciés
        </p>

        <h4>
          Niveau Technicien
        </h4>
        <p>
          – Avoir le niveau de la 2ème année du baccalauréat, ou être titulaire
          d’un diplôme de qualification professionnelle reconnu par les pouvoirs
          publics
        </p>
        <p>
          – Etre âgé de 30 ans au maximum à la date d’inscription
        </p>
        <p>
          – L’accès aux filières est conditionné par le niveau scolaire du
          candidat
        </p>

        <h4>
          Niveau Qualification
        </h4>
        <p>
          – Avoir au minimum le niveau de la 3ème année de l’enseignement
          secondaire collégial ou être titulaire d’un diplôme de spécialisation
          reconnu par les pouvoirs publics
        </p>
        <p>
          – Etre âgé de 30 ans au maximum à la date d’inscription
        </p>

        <h4>
          Niveau Spécialisation
        </h4>
        <p>
          – Avoir au minimum le niveau de la 6ème année de l’enseignement
          primaire;
        </p>
        <p>
          – Etre âgé de 30 ans au maximum à la date d’inscription.
        </p>

        <h4>
          Baccalauréat Professionnel
        </h4>
        <p>
          &gt; Tronc Commun
        </p>
        <p>
          – Avoir réussi la 3ème année de l’enseignement secondaire collégial;
        </p>
        <p>
          – Pour les bénéficiaires de l’éducation non formelle : Avoir réussi la
          3ème année de l’enseignement secondaire collégial, et ne pas dépasser
          19 ans au début de la formation.
        </p>
        <p>
          &gt; 1ère année du Baccalauréat du cycle BAC PRO
        </p>
        <p>
          – Avoir réussi le cycle du tronc commun professionnel
        </p>
        <p>
          – Avoir réussi le tronc commun dans les cycles non professionnels
          (dans le cadre de la réorientation)
        </p>
        <p>
          – Etre titulaire d’un diplôme de niveau qualification délivré par un
          établissement de formation professionnelle
        </p>

        <h4>
          Formations du Parcours Collégial Professionnel
        </h4>
        <p>
          &gt; 1ère année
        </p>
        <p>
          – Avoir réussi la 6ème année de l’enseignement primaire
        </p>
        <p>
          – Pour les bénéficiaires de l’éducation non formelle : être titulaire
          du Certificat des Etudes Primaires, et ne pas dépasser 16 ans au début
          de la formation
        </p>
        <p>
          &gt; 2ème année
        </p>
        <p>
          – Avoir réussi la 1ère année du parcours collégial professionnel
        </p>
        <p>
          – Etre titulaire d’un diplôme de niveau spécialisation ou équivalent,
          délivré par un établissement de formation professionnel
        </p>

      </AboutPageContent>
    </Fragment>
  )
}

export default About
