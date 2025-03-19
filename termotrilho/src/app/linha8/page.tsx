"use client"
import { useState } from "react"
import Link from "next/link"
import { MessageCircle, LogOut } from "lucide-react"
import MaintenanceModal from "@/components/maintenance-modal"
import { useMaintenanceContext } from "@/context/maintenance-context"
 
const stations = [
  "Júlio Prestes",
  "Palmeiras-Barra Funda",
  "Lapa",
  "Domingos de Moraes",
  "Imperatriz Leopoldina",
  "Presidente Altino",
  "Osasco",
  "Comandante Sampaio",
  "Quitaúna",
  "General Miguel Costa",
  "Carapicuíba",
  "Santa Teresinha",
  "Antônio João",
  "Barueri",
  "Jardim Belval",
  "Jardim Silveira",
  "Jandira",
  "Sagrado Coração",
  "Engenheiro Cardoso",
  "Itapevi",
  "Santa Rita",
  "Amador Bueno",
]
 
export default function Linha8() {
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
 
          <div className="nav-item active nav-item-with-icon">
            <span className="status-dot green"></span>
            Linha 8
          </div>
 
          <Link href="/linha9" className="nav-item nav-item-with-icon">
            <span className="status-dot red"></span>
            Linha 9
          </Link>
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
          <div className="vertical-line gray"></div>
 
          {/* Estações */}
          <div className="stations-container">
            {stations.map((station, index) => (
              <div key={station} className="station">
                {/* Nome da Estação (Esquerda) */}
                <div className="station-name">{station}</div>
 
                {/* Ponto da Estação (Centro) */}
                <div className="station-dot"></div>
 
                {/* Espaço Vazio (Direita) para balancear o layout */}
                <div className="station-spacer"></div>
              </div>
            ))}
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
        currentLine="Linha 8"
        onSubmit={addMaintenanceRequest}
      />
    </div>
  );
}