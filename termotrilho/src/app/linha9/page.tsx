"use client"
import { useState } from "react"
import Link from "next/link"
import { MessageCircle, LogOut } from "lucide-react"
import MaintenanceModal from "@/components/maintenace-modal"
import { useMaintenanceContext } from "@/context/maintenance-context"
 
const stations = [
  "Osasco",
  "Presidente Altino",
  "Ceasa",
  "Villa Lobos - Jaguaré",
  "Cidade Universitária",
  "Pinheiros",
  "Hebraica - Rebouças",
  "Cidade Jardim",
  "Vila Olímpia",
  "Berrini",
  "Morumbi",
  "Granja Julieta",
  "João Dias",
  "Santo Amaro",
  "Socorro",
  "Jurubatuba",
  "Autódromo",
  "Primavera - Interlagos",
  "Grajaú",
  "Vila Natal",
]
 
const connectedStations = ["Socorro", "Jurubatuba"]
 
export default function Linha9() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const { addMaintenanceRequest } = useMaintenanceContext()
 
  return (
    <div className="app-container">
      {/* Barra Lateral Esquerda */}
      <div className="sidebar">
        {/* Logo */}
        <div className="sidebar-logo">
          <div>
            <div className="logo-text">
              <span className="blue-text">T</span>
              <span className="gray-text">ermo</span>
            </div>
            <div className="logo-text">
              <span className="gray-text">T</span>
              <span className="blue-text">rilho</span>
            </div>
          </div>
        </div>
 
        {/* Navegação */}
        <nav className="nav-menu">
          <Link href="/dashboard" className="nav-item">
            Home
          </Link>
 
          <Link href="/linha8" className="nav-item nav-item-with-icon">
            <span className="status-dot green"></span>
            Linha 8
          </Link>
 
          <div className="nav-item active nav-item-with-icon">
            <span className="status-dot red"></span>
            Linha 9
          </div>
        </nav>
 
        {/* Ações Inferiores */}
        <div className="sidebar-footer">
          <Link href="/contact" className="footer-item">
            <MessageCircle className="footer-icon" />
            Contate
          </Link>
          <Link href="/" className="footer-item">
            <LogOut className="footer-icon" />
            Sair
          </Link>
        </div>
      </div>
 
      {/* Conteúdo Principal */}
      <div className="main-content linha-content">
        {/* Container de Linha de Trem Rolável */}
        <div className="train-line-container">
          <div className="vertical-line teal"></div>
 
          {/* Estações */}
          <div className="stations-container">
            {stations.map((station, index) => {
              const isConnected = connectedStations.includes(station);
              const nextStation = stations[index + 1];
              const showConnector = isConnected && connectedStations.includes(nextStation);
 
              return (
                <div key={station} className="station">
                  {/* Nome da Estação (Esquerda) */}
                  <div className="station-name">{station}</div>
 
                  {/* Ponto da Estação (Centro) */}
                  <div className={`station-dot ${isConnected ? "connected" : ""}`}></div>
 
                  {/* Espaço Vazio (Direita) para balancear o layout */}
                  <div className="station-spacer"></div>
 
                  {/* Linha de Conexão para estações conectadas */}
                  {showConnector && <div className="connector"></div>}
                </div>
              );
            })}
          </div>
        </div>
 
        {/* Botão de Manutenção - Fixo na parte inferior */}
        <div className="maintenance-button-container">
          <button onClick={() => setIsModalOpen(true)} className="maintenance-button">
            Acionar Manutenção!
          </button>
        </div>
      </div>
 
      {/* Modal de Manutenção */}
      <MaintenanceModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        currentLine="Linha 9"
        onSubmit={addMaintenanceRequest}
      />
    </div>
  );
}