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
        const [timeLeft, setTimeLeft] = useState(15);

        useEffect(() => {
          const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
          }, 86400000); // 24 hours

          return () => clearInterval(timer);
        }, []);

        // 🚀 injeta a animação do letreiro direto no head
        useEffect(() => {
          const style = `
            @keyframes marquee {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-50%); }
            }
            .marquee-container {
              display: flex;
              width: 200%;
              animation: marquee 30s linear infinite; /* mais lento */
            }
            .marquee-text {
              white-space: nowrap;
              flex: 1;
            }
          `;
          const styleTag = document.createElement("style");
          styleTag.innerHTML = style;
          document.head.appendChild(styleTag);
          return () => {
            document.head.removeChild(styleTag);
          };
        }, []);

        const handlePurchaseClick = () => {
          // TODO: Implement purchase functionality
          console.log("Purchase initiated");
        };

        return (
          <div className="font-inter bg-cream text-navy">

            {/* 🚨 Letreiro fixo no topo */}
            <div className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-yellow-400 to-red-500 text-white h-7 flex items-center overflow-hidden shadow">
              <div className="marquee-container font-semibold text-sm">
                <div className="marquee-text">
                  🚨 ¡Oferta Especial! Solo US$ 19,90 — Manual del Bebé Dormilón + 3 Bonos 🎁 — Acceso Inmediato 🔥
                </div>
                <div className="marquee-text">
                  🚨 ¡Oferta Especial! Solo US$ 19,90 — Manual del Bebé Dormilón + 3 Bonos 🎁 — Acceso Inmediato 🔥
                </div>
              </div>
            </div>

            {/* Header Section */}
            <header className="bg-gradient-to-r from-baby-blue to-soft-pink py-6 mt-7">
              <div className="container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-2" data-testid="main-title">
                  🌙Manual del Bebé Dormilón💤
                </h1>
                <p className="text-xl text-white opacity-90" data-testid="subtitle">
                  14 Pasos hacia la <span className="text-violet-400 font-semibold">Libertad Nocturna</span>!
                </p>
              </div>
            </header>


      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-baby-blue/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy" data-testid="hero-title">
              Transforma las noches de terror en noches de paz absoluta
            </h2>
            <p className="text-xl mb-8 text-gray-700" data-testid="hero-description">
              Descubre el método comprobado que ya ha ayudado a más de 10.000 familias a conquistar el sueño soñado para sus bebés en ¡solo 6 semanas!
            </p>
            
            <div className="mb-8">
              <img 
                src="https://i.postimg.cc/jjM4w98L/bebe-dormindo-2.png" 
                alt="Bebê dormindo peacefully" 
                className="rounded-xl shadow-2xl mx-auto max-w-md w-full"
                data-testid="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Problem Identification Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy" data-testid="problems-title">
              🥵¿Estás <span className="text-red-600 font-extrabold">EXHAUSTA</span> y ya no aguantas más...?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-red-50 border-l-4 border-red-400" data-testid="problem-card-1">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-red-700 flex items-center">
                    <XCircle className="mr-2" />
                    ¿Despertarte 5, 6, 7 veces por noche?
                  </h3>
                  <p className="text-gray-700">Tu bebé se despierta constantemente y ya ni recuerdas lo que es dormir una noche completa…</p>
                </CardContent>
              </Card>
              
              <Card className="bg-red-50 border-l-4 border-red-400" data-testid="problem-card-2">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-red-700 flex items-center">
                    <XCircle className="mr-2" />
                    ¿Pasar horas intentando que tu bebé se duerma?
                  </h3>
                  <p className="text-gray-700">Lo meces, cantas, caminas por toda la casa… pero nada funciona y el bebé sigue resistiéndose al sueño.</p>
                </CardContent>
              </Card>
              
              <Card className="bg-red-50 border-l-4 border-red-400" data-testid="problem-card-3">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-red-700 flex items-center">
                    <XCircle className="mr-2" />
                    ¿Sentir que estás fallando como madre?
                  </h3>
                  <p className="text-gray-700">Otras mamás parecen tener todo bajo control mientras tú te sientes perdida e incapaz…</p>
                </CardContent>
              </Card>
              
              <Card className="bg-red-50 border-l-4 border-red-400" data-testid="problem-card-4">
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3 text-red-700 flex items-center">
                    <XCircle className="mr-2" />
                    ¿Ver que tu relación se deteriora?
                  </h3>
                  <p className="text-gray-700">La falta de sueño afecta tu humor, tu paciencia y tu relación de pareja…</p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-navy text-white p-8 rounded-xl text-center" data-testid="solution-teaser">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-4">¡DEJA DE SUFRIR! La solución está aquí...</h3>
                <p className="text-lg">Miles de madres ya han transformado sus noches con este método del que nadie habla.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Presentation */}
      <section className="py-16 bg-gradient-to-b from-baby-blue/5 to-soft-pink/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-navy" data-testid="solution-title">
                💡Te presento el MANUAL DEL BEBÉ DORMILÓN💤
              </h2>
              <p className="text-xl text-gray-700 mb-8" data-testid="solution-description">
                Un manual completo con 14 pasos que transformará a tu bebé en un verdadero dormilón ¡de forma natural!
              </p>
            </div>

            <div className="text-center mb-12">
              <img 
                src="https://i.ibb.co/KCF0thX/bebe-dormilon.png" 
                alt="Mãe feliz com bebê dormindo" 
                className="rounded-xl shadow-2xl mx-auto max-w-lg w-full"
                data-testid="solution-image"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white shadow-lg" data-testid="feature-card-1">
                <CardContent className="p-6">
                  <div className="text-green-600 text-4xl mb-4">
                    <CheckCircle />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Método Científico Comprobado</h3>
                  <p className="text-gray-700">Basado en investigaciones internacionales sobre el sueño infantil y avalado por pediatras</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg" data-testid="feature-card-2">
                <CardContent className="p-6">
                  <div className="text-green-600 text-4xl mb-4">
                    <Clock />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Primeros Resultados en Solo 15 Días</h3>
                  <p className="text-gray-700">Sin llanto excesivo, sin traumas, solo una transición suave y natural</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg" data-testid="feature-card-3">
                <CardContent className="p-6">
                  <div className="text-green-600 text-4xl mb-4">
                    <CheckCircle />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Para Bebés de 0 a 4 Años</h3>
                  <p className="text-gray-700">Método adaptable a diferentes edades y personalidades</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg" data-testid="feature-card-4">
                <CardContent className="p-6">
                  <div className="text-green-600 text-4xl mb-4">
                    <CheckCircle />
                  </div>
                  <h3 className="font-bold text-lg mb-3">Respetuoso y Amoroso</h3>
                  <p className="text-gray-700">Nada de métodos traumáticos, solo técnicas efectivas y llenas de cariño</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy" data-testid="bonus-title">
              🫣¡BONOS EXCLUSIVOS 100% GRATIS!😻
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Bonus 1 */}
              <Card className="bg-gradient-to-b from-soft-pink/20 to-white border-2 border-soft-pink" data-testid="bonus-card-1">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="bg-soft-pink text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Gift className="text-2xl" />
                    </div>
                    <div className="text-red-500 line-through text-lg font-semibold">US$ 27</div>
                    <Badge className="bg-green-600 text-white font-bold text-lg">GRATIS</Badge>
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-center">Mini eBook</h3>
                  <h4 className="font-semibold mb-3 text-center">"Errores Comunes que Dificultan el Sueño del Bebé"</h4>
                  <p className="text-gray-700 text-sm text-center">Descubre los errores más frecuentes que los padres cometen y que sabotean el descanso de sus bebés.</p>
                </CardContent>
              </Card>
              
              {/* Bonus 2 */}
              <Card className="bg-gradient-to-b from-baby-blue/20 to-white border-2 border-baby-blue" data-testid="bonus-card-2">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="bg-baby-blue text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <Calendar className="text-2xl" />
                    </div>
                    <div className="text-red-500 line-through text-lg font-semibold">US$ 27</div>
                    <Badge className="bg-green-600 text-white font-bold text-lg">GRATIS</Badge>
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-center">Tarjeta Práctica</h3>
                  <h4 className="font-semibold mb-3 text-center">"Rutina Nocturna en 15 Minutos"</h4>
                  <p className="text-gray-700 text-sm text-center">Una guía lista para imprimir con el paso a paso de la rutina perfecta antes de dormir.</p>
                </CardContent>
              </Card>
              
              {/* Bonus 3 */}
              <Card className="bg-gradient-to-b from-warm-coral/20 to-white border-2 border-warm-coral" data-testid="bonus-card-3">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="bg-warm-coral text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                      <CheckSquare className="text-2xl" />
                    </div>
                    <div className="text-red-500 line-through text-lg font-semibold">US$ 27</div>
                    <Badge className="bg-green-600 text-white font-bold text-lg">GRATIS</Badge>
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-center"> Checklist</h3>
                  <h4 className="font-semibold mb-3 text-center">"Sueño Perfecto"</h4>
                  <p className="text-gray-700 text-sm text-center">Lista completa para verificar se tudo está pronto para uma noite perfeita de sono</p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="bg-green-100 border-2 border-green-400 text-center" data-testid="bonus-value">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-green-800 mb-2">VALOR TOTAL DE LOS BONOS: US$ 81</h3>
                <p className="text-green-700 font-semibold">Todos inclusos GRATUITAMENTE na sua compra!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-pink-300 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8" data-testid="pricing-title">
              😱¡OFERTA ESPECIAL POR TIEMPO LIMITADO!🚨
            </h2>
            
            <Card className="bg-white text-navy rounded-xl shadow-2xl mb-8" data-testid="pricing-card">
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="text-red-500 line-through text-2xl mb-2">De US$ 67</div>
                  <div className="text-5xl font-bold text-green-600 mb-4">US$ 19,90</div>
                  <div className="text-lg text-gray-600">Acceso Inmediato + 3 Bonos Gratis</div>
                </div>
                
                <Card className="bg-red-100 border border-red-400 mb-6" data-testid="urgency-banner">
  <CardContent className="p-4">
    <div className="font-bold text-red-700 mb-2 flex items-center justify-center">
      <AlertCircle className="mr-2" />
      ¡Promoción válida SOLO por {5} DÍAS!
    </div>
    <div className="text-red-600">
      Después, el precio vuelve a <span className="whitespace-nowrap">US$ 67</span>
    </div>
  </CardContent>
</Card>

                
                <Button
                  data-testid="button-purchase-final"
                  onClick={() => window.location.href = 'https://estante-virtual6.pay.yampi.com.br/r/4QRC8DIB1O'}
                  className="pulse-button bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-6 py-3 rounded-full w-full mb-4 transition-all whitespace-normal break-words text-center leading-tight"
                >
                  🛒 ¡QUIERO MI BEBÉ DORMILÓN AHORA!
                </Button>
                
                <div className="text-center text-sm text-gray-600 mt-2">
                  Pago 100% seguro
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-green-600 text-white" data-testid="guarantee-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 flex items-center justify-center">
                  <ShieldCheck className="text-yellow-500 mr-2 h-6 w-6" />
                  GARANTÍA DE 7 DÍAS
                </h3>
                <p className="text-center"></p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gradient-to-b from-soft-pink/10 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy" data-testid="testimonials-title">
              😴Opiniones de Mamás que ya transformaron sus noches✨
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-white shadow-lg" data-testid="testimonial-card-1">
                <CardContent className="p-6">
                  <img 
                    src="https://i.ibb.co/h1RxN1J0/Whats-App-Image-2025-09-27-at-00-31-56-2.jpg" 
                    alt="Mãe feliz com bebê" 
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="text-yellow-400 text-center mb-4 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"En solo 10 días mi hija de 8 meses empezó a dormir toda la noche. No creía que sería tan fácil. Ahora despierto descansada y soy una mamá mucho más paciente."</p>
                  <div className="font-bold text-navy">Lucía Gómez – Barcelona, España</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg" data-testid="testimonial-card-2">
                <CardContent className="p-6">
                  <img 
                    src="https://i.ibb.co/s9tDt5Hz/Whats-App-Image-2025-09-27-at-00-31-56-1.jpg" 
                    alt="Mãe feliz testimonial" 
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="text-yellow-400 text-center mb-4 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"¡Estaba desesperada! Mi bebé solo dormía en brazos y yo pasaba noches en vela. Con el manual, en 2 semanas ya dormía en su cuna solo. ¡Salvó mi matrimonio!"</p>
                  <div className="font-bold text-navy">Camila Sánchez – Bilbao, España</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg" data-testid="testimonial-card-3">
                <CardContent className="p-6">
                  <img 
                    src="https://i.ibb.co/7mMr4WS/Whats-App-Image-2025-09-27-at-00-31-55.jpg" 
                    alt="Mãe tranquila testimonial" 
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="text-yellow-400 text-center mb-4 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"Probé de todo en internet y nada funcionaba. Este manual fue diferente: científico, práctico y realmente eficaz. ¡Mi bebé duerme 12 horas seguidas!"</p>
                  <div className="font-bold text-navy">Alejandra Morales – Sevilla, España</div>
                </CardContent>
              </Card>
              
              <Card className="bg-white shadow-lg" data-testid="testimonial-card-4">
                <CardContent className="p-6">
                  <img 
                    src="https://i.ibb.co/Y7xPcM2v/Whats-App-Image-2025-09-27-at-00-31-56.jpg" 
                    alt="Família feliz testimonial" 
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                  />
                  <div className="text-yellow-400 text-center mb-4 flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"Como pediatra, recomiendo este manual a todas las madres. Está basado en ciencia, es respetuoso con el bebé y realmente funciona. Mis propios hijos durmieron con este método."</p>
                  <div className="font-bold text-navy">Dra. María Fernández – Pediatra – Madrid, España</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy" data-testid="learn-title">
              ✍️Exactamente lo que vas a aprender✨
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  number: "1",
                  title: "La Ciencia detrás del Sueño Infantil",
                  description: "Entiende cómo funciona el sueño del bebé y por qué es distinto al del adulto.",
                  color: "baby-blue"
                },
                {
                  number: "2",
                  title: "Identificando las Señales de Sueño",
                  description: "Aprende a reconocer cuándo tu bebé tiene sueño ANTES del llanto.",
                  color: "soft-pink"
                },
                {
                  number: "3",
                  title: "Creando el Ambiente Perfecto",
                  description: "Temperatura, luz, ruidos: cada detalle para la habitación ideal.",
                  color: "baby-blue"
                },
                {
                  number: "4",
                  title: "La Rutina de los 15 Minutos",
                  description: "Guía paso a paso para preparar al bebé antes de dormir.",
                  color: "soft-pink"
                },
                {
                  number: "5",
                  title: "Técnicas de Auto-Calma",
                  description: "Cómo enseñar a tu bebé a volver a dormirse solo durante la noche.",
                  color: "baby-blue"
                },
                {
                  number: "6",
                  title: "Cómo Manejar las Regresiones",
                  description: "Qué hacer cuando el bebé vuelve a despertarse tras haber aprendido a dormir.",
                  color: "soft-pink"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-4 p-4 bg-${item.color}/10 rounded-lg`}
                  data-testid={`learn-item-${index + 1}`}
                >
                  <div className={`bg-${item.color} text-white rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold`}>
                    {item.number}
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-navy" data-testid="faq-title">
              🤔Preguntas Frecuentes
            </h2>
            
            <div className="space-y-4">
              {[
                {
                  question: "¿Funciona para bebés de todas las edades?",
                  answer: "¡Sí! El manual es adaptable para bebés de 0 a 4 años. Cada etapa tiene orientaciones específicas para asegurar resultados."
                },
                {
                  question: "¿El bebé llorará mucho en el proceso?",
                  answer: "¡No! Nuestro método es respetuoso y evita el llanto excesivo con técnicas graduales y amorosas."
                },
                {
                  question: "¿En cuánto tiempo veré resultados?",
                  answer: "La mayoría de las familias nota mejoras en solo 15 días. Algunos bebés responden incluso más rápido."
                },
                {
                  question: "¿Si empiezo con un recién nacido, cuándo se estabiliza su sueño?",
                  answer: "A partir de los 4 meses ya debería tener un patrón de sueño más consistente."
                }
              ].map((faq, index) => (
                <Card key={index} className="bg-white shadow-sm border border-gray-200" data-testid={`faq-item-${index + 1}`}>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-3 text-navy flex items-center">
                      <AlertCircle className="text-baby-blue mr-2" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-700">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-900 to-pink-300 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" data-testid="final-cta-title">
              🕒Tu Última Oportunidad de Transformar las Noches de tu Familia🌙
            </h2>
            
            <img 
              src="https://i.postimg.cc/WbSzvvtF/mae-e-bebe-2.png" 
              alt="Bebê dormindo peacefully no berço" 
              className="rounded-xl shadow-2xl mx-auto max-w-lg w-full mb-8"
              data-testid="final-cta-image"
            />
            
            <p className="text-xl mb-8" data-testid="final-cta-description">
              Imagina despertar mañana después de una noche completa de descanso... tu bebé durmiendo tranquilamente en su cuna, tú feliz y renovada.
            </p>
            
            <Card className="bg-white text-navy rounded-xl mb-8" data-testid="final-pricing-card">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-green-600 mb-4">😴US$ 19,90💤</div>
                <div className="text-lg mb-4">Manual + 3 Bonos Gratis</div>
                
                <Button
                  onClick={() => window.location.href = 'https://estante-virtual6.pay.yampi.com.br/r/4QRC8DIB1O'}
                  className="pulse-button bg-warm-coral hover:bg-warm-coral/90 text-white font-bold text-lg px-6 py-3 rounded-full w-full mb-4 transition-all whitespace-normal break-words text-center leading-tight"
                  data-testid="button-purchase-final"
                >
                  🚀 ¡SÍ! ¡QUIERO MI BEBÉ DORMILÓN AHORA!
                </Button>


                
                <div className="text-sm text-gray-600 space-y-2">
                  <div className="flex items-center justify-center">
                    <Shield className="text-green-600 mr-2 h-4 w-4" />
                    Garantía de 7 días
                  </div>
                  <div className="flex items-center justify-center">
                    <Download className="text-green-600 mr-2 h-4 w-4" />
                    Acceso inmediato
                  </div>
                  <div className="flex items-center justify-center">
                    <Lock className="text-green-600 mr-2 h-4 w-4" />
                    Pago 100% seguro
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="text-yellow-300 text-sm" data-testid="final-urgency">
              ⚠️ OFERTA VÁLIDA SOLO POR {5} DÍAS - ¡NO LA DEJES PASAR!
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <h3 className="font-bold text-lg" data-testid="footer-title">Manual del Bebé Dormilón</h3>
            <p className="text-gray-400" data-testid="footer-tagline">ransformando noches, fortaleciendo familias</p>
          </div>
          
          <div className="text-gray-400 text-sm space-y-2">
            <p data-testid="footer-copyright">© 2025 Manual del Bebé Dormilón. Todos los derechos reservados.</p>
            <p data-testid="footer-support">Suporte E-mail: manualdobebedorminhoco@gmail.com</p>
            <p data-testid="footer-disclaimer">Este producto no sustituye la orientación médica profesional.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
