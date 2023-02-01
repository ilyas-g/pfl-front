import React from 'react'
import './style.css'

export default function AccessMap({title, text}) {
  return (
    <div className="access-map-section">
    <div className="contenu">
        <div>
            <h2>{title}</h2>
            <p>{text}</p>

            <p><span>14/20 Rue Soleillet, 75020 Paris</span></p>

            <h3>Transports</h3>

            <p>Metro 3 Gambetta</p>
        </div>

        <div>
            <div className="map" data-map="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.620510858017!2d2.387704333747622!3d48.86544644192433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d3a86190d7b%3A0xbe60dfd644066bd0!2sMaison%20de%20l&#39;Esport!5e0!3m2!1sfr!2sfr!4v1675273029683!5m2!1sfr!2sfr">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.620510858017!2d2.387704333747622!3d48.86544644192433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66d3a86190d7b%3A0xbe60dfd644066bd0!2sMaison%20de%20l&#39;Esport!5e0!3m2!1sfr!2sfr!4v1675273029683!5m2!1sfr!2sfr" width="600" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    </div>
</div>
  )
}
