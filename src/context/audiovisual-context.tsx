// @ts-nocheck

import { createContext, useState } from "react";
import { ITipoContenidoAudiovisual } from "../data/tiposContenidoAudiovisual";
import { ContenidoAudiovisual } from "../data/contenidosAudiovisuales";
import { IGeneroContenidoAudiovisual } from "../data/generosContenidoAudiovisual";

interface IAudiovisualesContext {
  tipos: ITipoContenidoAudiovisual[];
  generos: IGeneroContenidoAudiovisual[];
  contenidos: ContenidoAudiovisual[];
  contenidosFiltrados: ContenidoAudiovisual[];
  setContenidosFiltrados: (contenidos: ContenidoAudiovisual[]) => void;   
  setTipos: (tipos: ITipoContenidoAudiovisual[]) => void;
  setGeneros: (generos: IGeneroContenidoAudiovisual[]) => void;
  setContenidos: (contenidos: ContenidoAudiovisual[]) => void;
  isLoaded: boolean;
  setIsLoaded: (loaded: boolean) => void;
}

export const AudiovisualesContext = createContext<IAudiovisualesContext>(null);

export function AudiovisualesContextProvider({ children }) {
  const [tipos, setTipos] = useState<ITipoContenidoAudiovisual[]>([]);
  const [generos, setGeneros] = useState<IGeneroContenidoAudiovisual[]>([]);
  const [contenidos, setContenidos] = useState<ContenidoAudiovisual[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [contenidosFiltrados, setContenidosFiltrados] = useState<ContenidoAudiovisual[]>(contenidos);

  return (
    <AudiovisualesContext.Provider
      value={{
        tipos,
        generos,
        contenidos,
        contenidosFiltrados,
        setContenidosFiltrados,        
        setGeneros,
        setTipos,
        setContenidos,
        isLoaded,
        setIsLoaded,      
      }}
    >
      {children}
    </AudiovisualesContext.Provider>
  );
}