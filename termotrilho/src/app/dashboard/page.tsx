"use client"
 
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { MessageCircle, LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
 
export default function Dashboard() {
  const [activeTab, setActiveTab] = useState("historico")
  const router = useRouter()
 
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
          <button
            onClick={() => setActiveTab("historico")}
            className={`nav-item ${activeTab === "historico" ? "active" : ""}`}
          >
            Home
          </button>
 
          <Link href="/linha8" className="nav-item nav-item-with-icon">
            <span className="status-dot green"></span>
            Linha 8
          </Link>
 
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
      <div className="main-content">
        {/* Caixa de Boas-Vindas */}
        <div className="welcome-box">
          <h1>Bem-vindo ao Termo-Trilho!</h1>
          <p>Monitoramento inteligente para a segurança ferroviária. Prevenindo falhas e otimizando a manutenção</p>
        </div>
 
        {/* Botões de Ação - Posição Ajustada com Links */}
        <div className="action-buttons">
          <Link href="/linha8" className="action-button">
            Linha 8
          </Link>
          <Link href="/linha9" className="action-button">
            Linha 9
          </Link>
        </div>
 
        {/* Imagem do Trem com Fundo Curvo */}
        <div className="train-container">
          {/* Fundo Curvo Branco */}
          <div className="train-bg-white"></div>
 
          {/* Sobreposição Curva Azul */}
          <div className="train-bg-blue"></div>
 
         
 
          {/* Imagem do Trem */}
          <div className="train-image">
            <Image
              src="/trem.png"
              alt="Trem"
              width={600}
              height={400}
              className="train-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}