import { useState } from 'react'

export default function App() {
  const [clubFavorito, setClubFavorito] = useState('Ninguno')

  const partidos = [
    { fecha: '20 Sep', hora: '6:00 PM', equipos: 'Club A vs Club B' },
    { fecha: '25 Sep', hora: '4:30 PM', equipos: 'Club C vs Club D' },
    { fecha: '30 Sep', hora: '7:00 PM', equipos: 'Club E vs Club F' },
  ]

  const jugadoras = [
    { nombre: 'Laura Gómez', stat: '5 goles' },
    { nombre: 'Ana Martínez', stat: '3 asistencias' },
    { nombre: 'Carla Torres', stat: '90% efectividad' },
  ]

  const estadios = [
    { nombre: 'Estadio Metropolitano', ciudad: 'Barranquilla' },
    { nombre: 'El Campín', ciudad: 'Bogotá' },
    { nombre: 'Atanasio Girardot', ciudad: 'Medellín' },
  ]

  const clubes = ['Club A', 'Club B', 'Club C', 'Club D']

  const urlApp = 'https://vitalfem.vercel.app'

  return (
    <div style={{ fontFamily: 'Arial', padding: 20, maxWidth: 600, margin: '0 auto' }}>
      <h1 style={{ color: '#ec4899', textAlign: 'center' }}>VitalFem ⚽ Fútbol Femenino</h1>
      <p style={{ textAlign: 'center' }}>Escanea el QR en tu botella y apoya la visibilidad del fútbol femenino</p>

      <div style={{ textAlign: 'center', margin: '20px 0' }}>
        <img
          src={`https://chart.googleapis.com/chart?cht=qr&chl=${encodeURIComponent(urlApp)}&chs=200x200&chld=L|0`}
          alt="QR Code"
        />
      </div>

      <h2>Próximos Partidos</h2>
      <ul>
        {partidos.map((p, i) => (
          <li key={i}>{p.fecha} - {p.hora} | {p.equipos}</li>
        ))}
      </ul>

      <h2>Jugadoras Destacadas</h2>
      <ul>
        {jugadoras.map((j, i) => (
          <li key={i}>{j.nombre} - {j.stat}</li>
        ))}
      </ul>

      <h2>Estadios</h2>
      <ul>
        {estadios.map((e, i) => (
          <li key={i}>{e.nombre} ({e.ciudad})</li>
        ))}
      </ul>

      <h2>Selecciona tu Club Favorito</h2>
      {clubes.map((c, i) => (
        <button key={i} onClick={() => setClubFavorito(c)} style={{ margin: 5, padding: '5px 10px' }}>
          {c}
        </button>
      ))}

      <p style={{ marginTop: 10 }}>⭐ Club favorito actual: <strong style={{ color: '#ec4899' }}>{clubFavorito}</strong></p>
    </div>
  )
}
