import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Star, Calendar, MapPin, Trophy } from "lucide-react";

// Nuevo nombre de la bebida
const bebidaNombre = "VitalFem"; // Energía, vitalidad y enfoque en el fútbol femenino

export default function VitalFemFutbolApp() {
  const [clubFavorito, setClubFavorito] = useState("Ninguno");

  const partidos = [
    { fecha: "18 Sep", hora: "9:00 AM", equipos: "Ferencvaros vs Valerenga" },
    { fecha: "18 Sep", hora: "10:30 AM", equipos: "Sporting vs Roma" },
    { fecha: "18 Sep", hora: "11:00 AM", equipos: "Fortuna vs Polen" },
    { fecha: "18 Sep", hora: "12:00 PM", equipos: "Twente vs Katowice" },
    { fecha: "18 Sep", hora: "12:00 PM", equipos: "Atletico Madrid vs Hacken" },
    { fecha: "18 Sep", hora: "12:45 PM", equipos: "Austria Wien vs Paris Fc" },
    { fecha: "18 Sep", hora: "1:00 PM", equipos: "Manchester United vs Brann" },
    { fecha: "18 Sep", hora: "1:00 PM", equipos: "Real Madrid vs Eintracht Frankfurt" },
    { fecha: "18 Sep", hora: "1:00 PM", equipos: "Oud-Heverlee vs Vorskla" },
  ];

  const jugadoras = [
    { nombre: "Linda Caicedo", stat: "5 goles" },
    { nombre: "Garcia", stat: "3 asistencias" },
      { nombre: "Putellas", stat: "90% efectividad" },
  ];

  const estadios = [
    { nombre: "Estadio Alfredo Di Stefano", ciudad: "Madrid" },
    { nombre: "Leigh Sports Village Stadium", ciudad: "Leigh" },
    { nombre: "Estadio Municipal de Rios Maior", ciudad: "Rios Maior" },
  ];

  const clubes = ["Real Madrid", "Barcelona", "Manchester City", "Psg"];

  const urlApp = "https://vitalfem-futbol.com/app"; // URL de la app a la que redirige el QR

  return (
    <div className="min-h-screen bg-pink-50 p-4 flex flex-col items-center">
      <Card className="w-full max-w-md rounded-2xl shadow-xl">
        <CardContent className="p-6">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-pink-600">{bebidaNombre} ⚽ Fútbol Femenino</h1>
            <p className="text-sm text-gray-600">Escanea el QR en tu botella y apoya la visibilidad del fútbol femenino</p>
          </div>

          {/* Imagen de QR en lugar de componente */}
          <div className="flex justify-center mb-6">
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(urlApp)}`}
              alt="QR VitalFem"
              className="rounded-md shadow"
            />
          </div>

          <Tabs defaultValue="partidos">
            <TabsList className="grid grid-cols-4 gap-2">
              <TabsTrigger value="partidos"><Calendar size={18}/></TabsTrigger>
              <TabsTrigger value="jugadoras"><Trophy size={18}/></TabsTrigger>
              <TabsTrigger value="estadios"><MapPin size={18}/></TabsTrigger>
              <TabsTrigger value="clubes"><Star size={18}/></TabsTrigger>
            </TabsList>

            {/* Partidos */}
            <TabsContent value="partidos">
              <h2 className="font-bold text-lg mt-4">Próximos Partidos</h2>
              <ul className="mt-2 space-y-2">
                {partidos.map((p, i) => (
                  <li key={i} className="p-3 bg-white rounded-xl shadow flex justify-between">
                    <span>{p.fecha} - {p.hora}</span>
                    <span className="font-medium">{p.equipos}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            {/* Jugadoras */}
            <TabsContent value="jugadoras">
              <h2 className="font-bold text-lg mt-4">Jugadoras Destacadas</h2>
              <ul className="mt-2 space-y-2">
                {jugadoras.map((j, i) => (
                  <li key={i} className="p-3 bg-white rounded-xl shadow flex justify-between">
                    <span>{j.nombre}</span>
                    <span className="text-pink-600 font-medium">{j.stat}</span>
                  </li>
                ))}
              </ul>
            </TabsContent>

            {/* Estadios */}
            <TabsContent value="estadios">
              <h2 className="font-bold text-lg mt-4">Estadios</h2>
              <ul className="mt-2 space-y-2">
                {estadios.map((e, i) => (
                  <li key={i} className="p-3 bg-white rounded-xl shadow">
                    <span className="font-medium">{e.nombre}</span>
                    <p className="text-sm text-gray-500">{e.ciudad}</p>
                  </li>
                ))}
              </ul>
            </TabsContent>

            {/* Clubes favoritos */}
            <TabsContent value="clubes">
              <h2 className="font-bold text-lg mt-4">Selecciona tu Club Favorito</h2>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {clubes.map((c, i) => (
                  <Button key={i} variant="outline" onClick={() => setClubFavorito(c)}>
                    {c}
                  </Button>
                ))}
              </div>
              <p className="mt-4 text-center text-gray-600">
                ⭐ Club favorito actual: <span className="font-bold text-pink-600">{clubFavorito}</span>
              </p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
