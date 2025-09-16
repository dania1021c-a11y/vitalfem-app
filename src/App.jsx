const [clubFavorito, setClubFavorito] = useState("Ninguno");
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
