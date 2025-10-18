import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  XCircle,
  Gift,
  Calendar,
  CheckSquare,
  Shield,
  Clock,
  Star,
  AlertCircle,
  Download,
  Lock,
  ShieldCheck,
} from "lucide-react";

export default function Home() {
  // Contador regressivo para criar senso de urgência (48 horas a partir do carregamento)
  const [timeLeftSec, setTimeLeftSec] = useState(() => 48 * 3600); // 48 horas

  useEffect(() => {
    const t = setInterval(() => {
      setTimeLeftSec((s) => (s > 0 ? s - 1 : 0));
    }, 1000);
    return () => clearInterval(t);
  }, []);

  // letreiro / marquee styles in head
  useEffect(() => {
    const style = `
      @keyframes marquee {
        0% { transform: translateX(0%); }
        100% { transform: translateX(-50%); }
      }
      .marquee-container { display:flex; width:200%; animation: marquee 22s linear infinite; }
      .marquee-text { white-space:nowrap; flex:1; }
      .pulse-cta { animation: pulse 2.6s infinite; }
      @keyframes pulse { 0%{transform:scale(1)}50%{transform:scale(1.03)}100%{transform:scale(1)} }
    `;
    const styleTag = document.createElement("style");
    styleTag.innerHTML = style;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, []);

  const formatTime = (secs: number) => {
    const h = Math.floor(secs / 3600);
    const m = Math.floor((secs % 3600) / 60);
    const s = secs % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  };

  const purchaseUrl = 'https://pay.kiwify.com/EZCnzqT';

  return (
    <div className="font-inter bg-gradient-to-b from-cream to-white text-navy min-h-screen">

      {/* LETREIRO */}
      <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-yellow-400 to-red-500 text-white h-8 flex items-center overflow-hidden shadow-md">
        <div className="marquee-container font-semibold text-sm px-4">
          <div className="marquee-text">🚨 ¡Oferta Especial! Manual del Bebé Dormilón + 3 Bonos — Solo US$ 19,90 — Acceso Inmediato 🔥</div>
          <div className="marquee-text">🚨 ¡Oferta Especial! Manual del Bebé Dormilón + 3 Bonos — Solo US$ 19,90 — Acceso Inmediato 🔥</div>
        </div>
      </div>

      {/* HEADER - HERO */}
      <header className="pt-10 pb-6 bg-gradient-to-r from-baby-blue to-soft-pink mt-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight drop-shadow">
              🌙 Manual del <span className="text-[#C084FC]">Bebé Dormilón</span>
            </h1>
            <p className="mt-2 text-lg text-white/95">
              14 Pasos Probados para Recuperar Tus Noches y Tu Energía -
              <span className="text-[#FF4D4D] font-bold"> ¡Resultados en 15 Días!</span>
            </p>
            <div className="mt-4 flex flex-col sm:flex-row items-center gap-3">

              <Button
                onClick={() => window.open(purchaseUrl, "_blank")}
                className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-5 py-3 rounded-full shadow-lg pulse-cta"
              >
                🌙 ¡Sí, quiero dormir toda la noche!
                🌙 ¡Sí, Quiero Dormir Toda La Noche!
              </Button>


              <div className="text-sm text-white/90">🔒 Pago 100% Seguro</div>
            </div>

              <div className="mt-3 flex items-center justify-center gap-4">



              <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
                <Download className="h-5 w-5 text-yellow-300" />
                <div className="text-sm">Acceso Inmediato</div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img src="https://i.postimg.cc/jjM4w98L/bebe-dormindo-2.png" alt="Bebê dormindo peacefully" className="rounded-2xl shadow-2xl max-w-sm w-full" />
          </div>
        </div>
      </header>

      {/* HERO SECONDARY - PROOF + SHORT BENEFITS */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-3 bg-white shadow-md rounded-full px-4 py-3">
            <div className="text-sm">✅ Método probado por</div>
            <div className="font-bold">+10.000 mamás</div>
            <div className="text-sm">• Resultados desde 15 días</div>
          </div>
        </div>
      </section>

      {/* PROBLEMS SECTION (shorter text, more visceral) */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">¿Cansada de noches sin fin?</h2>
          <p className="text-center text-gray-700 mb-6">Sé lo que sientes: despertarte cuando por fin empiezas a descansar, mecer sin resultado y sentir que ya no puedes más. No estás sola.</p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-4 border-l-4 border-rose-400 bg-rose-50">
              <CardContent className="p-4">
                <h3 className="font-bold text-rose-700 flex items-center gap-2"><XCircle /> Despertares constantes</h3>
                <p className="text-sm text-gray-700 mt-2">Tu bebé se despierta justo cuando por fin logras dormir.</p>
              </CardContent>
            </Card>

            <Card className="p-4 border-l-4 border-rose-400 bg-rose-50">
              <CardContent className="p-4">
                <h3 className="font-bold text-rose-700 flex items-center gap-2"><XCircle /> Pasas horas intentando dormirlo</h3>
                <p className="text-sm text-gray-700 mt-2">Cantas, meces, caminas… y el sueño no llega.</p>
              </CardContent>
            </Card>

            <Card className="p-4 border-l-4 border-rose-400 bg-rose-50">
              <CardContent className="p-4">
                <h3 className="font-bold text-rose-700 flex items-center gap-2"><XCircle /> Sientes que fallas</h3>
                <p className="text-sm text-gray-700 mt-2">Otras parecen tenerlo todo bajo control; tú buscas una solución real y humana.</p>
              </CardContent>
            </Card>

            <Card className="p-4 border-l-4 border-rose-400 bg-rose-50">
              <CardContent className="p-4">
                <h3 className="font-bold text-rose-700 flex items-center gap-2"><XCircle /> Relación afectada</h3>
                <p className="text-sm text-gray-700 mt-2">La falta de sueño afecta tu ánimo y tu relación de pareja.</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 text-center">
            <Card className="bg-[#EAE4FF] text-gray-900 p-6 max-w-xl mx-auto rounded-xl shadow-md">
              <CardContent className="p-0">
                <h3 className="text-lg font-bold mb-2">
                  ¡DEJA DE <span className="text-purple-600">SUFRIR</span>! La solución respetuosa está aquí.
                </h3>
                <p className="text-sm">
                  Miles de mamás ya transformaron sus noches con pasos suaves y amorosos.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="py-12 bg-gradient-to-b from-baby-blue/5 to-soft-pink/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">💡 Te presento: Manual del Bebé Dormilón</h2>
            <p className="text-gray-700 mt-2">14 pasos respetuosos y prácticos para que tu bebé aprenda a dormir sin traumas; método basado en evidencia y experiencia real.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <img src="https://i.ibb.co/JjmykwXw/imagem-pro-site.png" alt="Mockup" className="rounded-2xl shadow-2xl w-full" />
            </div>

            <div className="md:w-1/2 space-y-4">
              <Card className="bg-white shadow p-4">
                <CardContent>
                  <h3 className="font-bold">Qué obtienes</h3>
                  <ul className="mt-2 text-sm text-gray-700 space-y-2">
                    <li>• Manual paso a paso (14 pasos)</li>
                    <li>• Rutina nocturna de 15 minutos</li>
                    <li>• Técnicas suaves de auto-calma</li>
                    <li>• Manejo de regresiones y transiciones</li>
                  </ul>
                </CardContent>
              </Card>

              <div className="flex gap-3">
                <Button
                  onClick={() => window.open(purchaseUrl, "_blank")}
                  className="bg-rose-500 hover:bg-rose-600 text-white font-bold px-4 py-2 rounded-full w-full"
                >
                  ¡Quiero Mi Manual Ahora!
                </Button>

                <Button onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })} className="bg-white border border-gray-200 text-navy font-semibold px-4 py-2 rounded-full w-full">Ver Opiniones</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BONUSES */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <h3 className="text-center text-2xl font-bold mb-6">🫣 Bonos Exclusivos 100% Gratis</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-4">
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="bg-soft-pink rounded-full p-3 mb-3"><Gift className="text-white" /></div>
                  <div className="line-through text-sm text-rose-500">US$15</div>
                  <Badge className="bg-green-600 text-white">GRATIS</Badge>
                  <h4 className="font-bold mt-3">Mini eBook</h4>
                  <p className="text-sm text-gray-600 text-center mt-2">Errores comunes que dificultan el sueño del bebé.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-4">
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="bg-baby-blue rounded-full p-3 mb-3"><Calendar className="text-white" /></div>
                  <div className="line-through text-sm text-rose-500">US$15</div>
                  <Badge className="bg-green-600 text-white">GRATIS</Badge>
                  <h4 className="font-bold mt-3">Tarjeta práctica</h4>
                  <p className="text-sm text-gray-600 text-center mt-2">Rutina nocturna en 15 minutos, lista para imprimir.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-4">
              <CardContent>
                <div className="flex flex-col items-center">
                  <div className="bg-warm-coral rounded-full p-3 mb-3"><CheckSquare className="text-white" /></div>
                  <div className="line-through text-sm text-rose-500">US$15</div>
                  <Badge className="bg-green-600 text-white">GRATIS</Badge>
                  <h4 className="font-bold mt-3">Checklist</h4>
                  <p className="text-sm text-gray-600 text-center mt-2">Lista "Sueño Perfecto" para preparar la noche ideal.</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-6 text-center">
            <Card className="inline-flex items-center gap-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="font-bold">Valor de los bonos: US$45</div>
              <div className="text-sm text-gray-600">¡Hoy Incluidos Gratis Con Tu Compra!</div>
            </Card>
          </div>
        </div>
      </section>

      {/* PRICING / URGENCY */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-pink-300 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">😱 Oferta Especial por Tiempo Limitado</h2>

          <Card className="bg-white text-navy rounded-2xl shadow-2xl p-6 mb-6">
            <CardContent>
              <div className="mb-4">
                <div className="text-sm line-through text-rose-500">De US$ 67</div>
                <div className="text-4xl md:text-5xl font-extrabold text-green-600">US$ 19,90</div>
                <div className="text-sm text-gray-600 mt-1">Acceso Inmediato + 3 Bonos Gratis</div>
              </div>

              <div className="bg-rose-50 border border-rose-200 rounded-lg p-3 mb-4">
                <div className="font-semibold text-rose-600">⏰ Oferta termina en: {formatTime(timeLeftSec)}</div>
                <div className="text-sm text-rose-600">Después, el precio vuelve a US$67</div>
              </div>

              <Button
                onClick={() => window.open(purchaseUrl, "_blank")}
                className="bg-amber-400 hover:bg-amber-500 text-navy font-bold px-6 py-3 rounded-full w-full"
              >
                🛒 ¡Sí, quiero el manual ahora!
                🛒 ¡Sí, Quiero El Manual Ahora!
              </Button>


              <div className="mt-3 text-sm text-gray-600">🔒 Pago 100% Seguro • Acceso Vitalicio</div>
            </CardContent>
          </Card>

          <div className="text-sm text-white/90">Compra hoy mismo con descuento, aprovecha esta oportunidad.
</div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12 bg-gradient-to-b from-soft-pink/10 to-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-bold text-center mb-6">Opiniones de Mamás Que Ya Transformaron Sus Noches</h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                img: 'https://i.ibb.co/h1RxN1J0/Whats-App-Image-2025-09-27-at-00-31-56-2.jpg',
                text: 'En solo 10 días mi hija de 8 meses empezó a dormir toda la noche. Ahora despierto descansada y soy una mamá más paciente.',
                name: 'Valentina Rojas – Santiago, Chile'
              },
              {
                img: 'https://i.ibb.co/s9tDt5Hz/Whats-App-Image-2025-09-27-at-00-31-56-1.jpg',
                text: '¡Estaba desesperada! En 2 semanas mi bebé ya dormía en su cuna solo. Salvó mi matrimonio.',
                name: 'Camila Torres – Bogotá, Colômbia'
              },
              {
                img: 'https://i.ibb.co/7mMr4WS/Whats-App-Image-2025-09-27-at-00-31-55.jpg',
                text: 'Probé de todo y nada funcionaba. Este manual fue diferente: práctico y eficaz. ¡Mi bebé duerme 12 horas seguidas!',
                name: 'Julieta Ramírez – Rosario, Argentina'
              },
              {
                img: 'https://i.ibb.co/Y7xPcM2v/Whats-App-Image-2025-09-27-at-00-31-56.jpg',
                text: 'Como pediatra, recomiendo este manual a las mamás. Basado en ciencia y respetuoso.',
                name: 'Dra. Emma Paredes – Cusco, Peru'
              }
            ].map((t, i) => (
              <Card key={i} className="p-4 shadow">
                <CardContent>
                  <div className="flex items-center gap-4">
                    <img src={t.img} alt={t.name} className="w-16 h-16 rounded-full object-cover" />
                    <div>
                      <div className="text-yellow-400 flex gap-1">
                        {[...Array(5)].map((_, k) => (
                          <Star key={k} className="h-4 w-4 fill-current" />
                        ))}
                      </div>

                      <p className="italic text-gray-700 mt-2">"{t.text}"</p>
                      <div className="font-bold mt-2 text-navy">{t.name}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h3 className="text-2xl font-bold text-center mb-6">Exactamente Lo Que Vas a Aprender</h3>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              {num:'1', title:'La Ciencia detrás del Sueño Infantil', desc:'Entiende cómo funciona el sueño del bebé.'},
              {num:'2', title:'Identificando las Señales', desc:'Reconoce el sueño antes del llanto.'},
              {num:'3', title:'Ambiente Perfecto', desc:'Luz, temperatura y sonidos ideales.'},
              {num:'4', title:'Rutina de 15 minutos', desc:'Guía práctica diaria.'},
              {num:'5', title:'Técnicas de Auto-calma', desc:'Que el bebé vuelva a dormirse solo.'},
              {num:'6', title:'Regresiones', desc:'Cómo manejarlas sin estrés.'}
            ].map((it)=> (
              <div key={it.num} className="p-4 bg-gray-50 rounded-lg flex gap-3 items-start">
                <div className="bg-baby-blue text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">{it.num}</div>
                <div>
                  <h4 className="font-bold">{it.title}</h4>
                  <p className="text-sm text-gray-600">{it.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h3 className="text-2xl font-bold text-center mb-4">Preguntas frecuentes</h3>
          <div className="space-y-3">
            {[
              {q:'¿Funciona para bebés de todas las edades?', a:'Sí, para bebés de 0 a 4 años con adaptaciones por etapa.'},
              {q:'¿El bebé llorará mucho?', a:'No, técnicas suaves y respetuosas para minimizar el llanto.'},
              {q:'¿En cuánto tiempo veré resultados?', a:'La mayoría nota mejoras en 15 días.'},
              {q:'Método Científico Comprobado', a:'Basado en investigaciones internacionales sobre el sueño infantil y avalado por pediatras'}
            ].map((f,i)=> (
              <Card key={i} className="p-4">
                <CardContent>
                  <h4 className="font-bold flex items-center gap-2"><AlertCircle /> {f.q}</h4>
                  <p className="text-sm text-gray-700 mt-2">{f.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-12 bg-gradient-to-r from-blue-900 to-pink-300 text-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h3 className="text-2xl font-bold mb-3">Tu Última Oportunidad de Transformar Las Noches</h3>
          <p className="text-white/90 mb-6">Imagina despertar después de una noche completa de descanso. Este es tu momento.</p>

          <Card className="bg-white text-navy rounded-2xl p-6 mb-4">
            <CardContent>
              <div className="text-3xl font-bold text-green-600 mb-2">US$ 19,90</div>
              <div className="mb-4">Manual + 3 bonos gratis • Acceso inmediato</div>
              <div className="mb-4">Manual + 3 bonos gratis • Acceso Inmediato</div>
              <Button
                onClick={() => window.open(purchaseUrl, "_blank")}
                className="bg-amber-400 hover:bg-amber-500 text-navy font-bold px-6 py-3 rounded-full w-full"
              >
                🚀 ¡Sí, lo quiero ahora!
                🚀 ¡Sí, Lo Quiero Ahora!
              </Button>


              <div className="mt-3 text-sm text-gray-600">🔒 Pago 100% Seguro • Acceso Vitalicio</div>
            </CardContent>
          </Card>

          <div className="text-sm text-yellow-200">⏰ Oferta válida por tiempo limitado • {formatTime(timeLeftSec)}</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <h4 className="font-bold mb-2">Manual del Bebé Dormilón</h4>
          <p className="text-sm text-gray-400 mb-3">Transformando noches, fortaleciendo familias</p>

          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="text-sm text-gray-400">© 2025 Reluna</div>
            <div className="text-sm text-gray-400">Suporte: soyreluna@gmail.com</div>
          </div>

          <div className="text-sm text-gray-500">Este producto no sustituye la orientación médica profesional.</div>
        </div>
      </footer>
    </div>
  );
}
