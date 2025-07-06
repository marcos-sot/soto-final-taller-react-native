import { View, StyleSheet, ImageBackground } from "react-native";
import { useState, use, useCallback } from "react";
import { colors } from "@/src/constants/colors";
import { Button } from "@/src/components/Button";
import { useRouter } from "expo-router";
import { useFocusEffect } from "@react-navigation/native";
import GuessTitleModal from "@/src/screens/components/juego/GuessTitleModal";
import { HeaderJuego } from "@/src/screens/components/juego/HeaderJuego";
import { AudiovisualesContext } from "@/src/context/audiovisual-context";
import { ContenidoAudiovisual } from "@/src/data/contenidosAudiovisuales";
import { GameStatusModal } from "@/src/screens/components/juego/GameStatusModal";

const router = useRouter();

export default function Ahorcado() {
  const [modalVisible, setModalVisible] = useState(false);
  const [statusModalVisible, setStatusModalVisible] = useState(false);
  const { contenidos } = use(AudiovisualesContext);
  const [contenidosParaJugar, setContenidosParaJugar] = useState<ContenidoAudiovisual[]>([]);
  const [contenidoActual, setContenidoActual] = useState<ContenidoAudiovisual | null>(null);
  const [puntaje, setPuntaje] = useState(0);
  const [vidas, setVidas] = useState(5);
  const [indiceActual, setIndiceActual] = useState(0);
  const [message, setMessage] = useState("");
  const [buttonLabel, setButtonLabel] = useState("");



  function openModal() {
    setModalVisible(true);
  }

  


  
  function handleSubmitGuess(title: string) {
    const adivinacion = title.trim().toLowerCase();
    const respuesta = contenidoActual?.nombre.trim().toLowerCase() ?? "";

    if (adivinacion === respuesta) {
      setPuntaje(puntaje + 1);
      setMessage("¡Correcto! Has adivinado el título.");
      setButtonLabel("Siguiente");
      setStatusModalVisible(true);
    } else {
      setVidas(v => {
        const nuevasVidas = v - 1;
        if (nuevasVidas <= 0) {
          setMessage("¡Perdiste! Te quedaste sin vidas.");
          setButtonLabel("Volver al inicio");
          setStatusModalVisible(true);

        } else {
          setMessage(`Lo siento, te quedan ${nuevasVidas} vidas.`);
          setButtonLabel("Intentar de nuevo");
          setStatusModalVisible(true);

        }
        return nuevasVidas;
      });
    }
  }



  function handleOnPressButton() {    
    return router.push("/");
  }

  function avanzarContenido() {
    const siguiente = indiceActual + 1;
    if (siguiente < contenidosParaJugar.length) {
      setIndiceActual(siguiente);
      setContenidoActual(contenidosParaJugar[siguiente]);
    } else {
      alert("¡Ganaste! Adivinaste todos los contenidos.");
      router.push("/"); // o modal final
    }
  }

  function closeModal() {
    setStatusModalVisible(false);
    if (vidas <= 0) {     
      router.push("/");
    } else {
      avanzarContenido(); 
    }
  }

  useFocusEffect(
    useCallback(() => {
      iniciarJuego();
    }, [])
);
 


function iniciarJuego() {
  const mezclados = [...contenidos].sort(() => Math.random() - 0.5);
  setContenidosParaJugar(mezclados);
  setContenidoActual(mezclados[0]);
  setVidas(5);
  setPuntaje(0);
  
}



  return (
    <View style={style.container}>
      <View style={style.separador} />
      <HeaderJuego vidas={vidas} puntaje={puntaje} nombreJugador="Marcos" />

      <View style={style.contentContainer}>
        <View style={style.contentButton}>
          <Button label="GUESS TITLE" onPress={openModal} />
          <Button label="GUESS LETTER" onPress={handleOnPressButton} />
        </View>

        <GuessTitleModal
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSubmitGuess={handleSubmitGuess}
        />

        {/* Modal para mostrar resultados */}
        <GameStatusModal
          visible={statusModalVisible}
          onClose={closeModal}
          message={message}
          buttonLabel={buttonLabel}
        />


        {contenidoActual && (
          <ImageBackground
            style={style.contentCenter}
            source={{ uri: contenidoActual.imageUrl }}
            resizeMode="cover"
          >

          </ImageBackground>
        )}

        <View style={style.footerContent}>
          {contenidoActual?.nombre.split('').map((letra, index) => (
            letra === ' '
              ? <View key={index} style={{ width: 16 }} />
              : <View key={index} style={style.cajaFooter} />
          ))}
        </View>


      </View>

    </View>
  );
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.fondo,
    gap: 10,
    padding:10

  },

  separador: {
    height: 20
  },

  contentContainer: {
    flex: 1,
    borderWidth: 4,
    borderColor: colors.grisOscuro,
    padding: 16,
    justifyContent: "space-between",
    gap: 20,
  },

  contentButton: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },

  contentCenter: {
    flex: 1,
    backgroundColor: colors.grisOscuro,
    width: "100%",
    justifyContent: "center",
    alignItems: "center"


  },

  footerContent: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.grisOscuro,
    padding: 10,
    width: '100%',
  },

  cajaFooter: {
    width: 12,
    height: 2,
    backgroundColor: colors.blanco,
    marginHorizontal: 4,
    marginVertical: 8,
    borderRadius: 2,

  }
});