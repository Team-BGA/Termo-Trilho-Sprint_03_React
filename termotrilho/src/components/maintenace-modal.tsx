"use client"
 
import type React from "react"
import { useState } from "react"
import { X } from "lucide-react"
 
interface MaintenanceModalProps {
  isOpen: boolean
  onClose: () => void
  currentLine: string
  onSubmit: (data: MaintenanceRequest) => void
}
 
export interface MaintenanceRequest {
  location: string
  description: string
  alertLevel: string
  line: string
  date: Date
}
 
export default function MaintenanceModal({ isOpen, onClose, currentLine, onSubmit }: MaintenanceModalProps) {
  const [location, setLocation] = useState("")
  const [description, setDescription] = useState("")
  const [alertLevel, setAlertLevel] = useState("1")
 
  if (!isOpen) return null
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
 
    const newRequest: MaintenanceRequest = {
      location,
      description,
      alertLevel,
      line: currentLine,
      date: new Date(),
    }
 
    onSubmit(newRequest)
 
    // Resetar formulário
setLocation("");
setDescription("");
setAlertLevel("1");
 
// Fechar modal
onClose();
};
 
// Gerar opções de localização com base na linha atual
const locationOptions =
  currentLine === "Linha 8"
    ? [
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
    : [
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
      ];
 
return (
  <div className="modal-overlay">
    <div className="modal">
      {/* Botão de fechar */}
      <button onClick={onClose} className="modal-close">
        <X size={24} />
      </button>
 
      <h2 className="modal-title">Acionando Manutenção</h2>
 
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label">Localização trilho:</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="form-select"
            required
          >
            <option value="">Selecione uma localização</option>
            {locationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
 
        <div className="form-group">
          <label className="form-label">Descrição do problema:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-textarea"
            rows={4}
            required
          />
        </div>
 
        <div className="form-group">
          <label className="form-label">Nível Alerta:</label>
          <select
            value={alertLevel}
            onChange={(e) => setAlertLevel(e.target.value)}
            className="form-select form-select-small"
            required
          >
            {[1, 2, 3, 4, 5].map((level) => (
              <option key={level} value={level.toString()}>
                {level}
              </option>
            ))}
          </select>
        </div>
 
        <div className="form-actions">
          <button type="submit" className="btn-blue">
            Acionar
          </button>
        </div>
      </form>
    </div>
  </div>
);
}