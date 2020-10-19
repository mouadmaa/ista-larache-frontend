import { FC } from 'react'

import { ButtonLinkContainer } from '@/components/UI/Button/ButtonLink/ButtonLinkStyles'
import { Formation } from '../../../generated/graphql'

interface FormationCardProps {
  level: string
  formations: Formation[]
  defaultChecked?: boolean
}

const FormationCard: FC<FormationCardProps> = props => {
  const { level, formations, defaultChecked = false } = props

  return (
    <div className="formation-card">
      <input
        className="formation-card__checkbox"
        type="checkbox" id={level}
        defaultChecked={defaultChecked}
      />
      <label
        className="formation-card__title"
        htmlFor={level}
      >
        {level}
      </label>

      <div className="formation-card__content">
        {formations.map(formation => (
          <ButtonLinkContainer
            key={formation.id}
            href={formation.descUrl}
            target='_blanck'
          >
            {formation.name}
          </ButtonLinkContainer>
        ))}
      </div>

      <style jsx>{`
        .formation-card {
          width: 100%;
          height: auto;
          background: #fff;
          box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.4);
          border-radius: 0.6rem;
          overflow: hidden;
          transition: 1.5s;
        }

        .formation-card__title {
          font-weight: 400;
          font-size: 1.3rem;
          text-transform: uppercase;
          width: 100%;
          height: 5rem;
          background: #4a4d52;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #f2f8f8;
          letter-spacing: 0.2rem;
          cursor: pointer;
          transition: 0.3s;
        }

        .formation-card__title:hover {
          background: #3b3e42;
        }

        .formation-card__content {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          max-height: 0;
          opacity: 0;
          pointer-events: none;
          transition: 0.3s ease-in;
        }

        .formation-card__checkbox {
          position: absolute;
          opacity: 0;
          z-index: -1;
        }

        .formation-card__checkbox:checked ~ .formation-card__content {
          padding: 1.6rem 0;
          max-height: 100vh;
          opacity: 1;
          pointer-events: all;
        }
      `}</style>
    </div>
  )
}

export default FormationCard
