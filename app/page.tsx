'use client'

import React, { useState, useEffect } from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

interface DadosPeriodo {
  data: string
  periodo: string
  investimento: number
  seguidores: number
  novos_seguidores: number
  custo_por_seg: number
}

interface DadosCasa {
  [casa: string]: DadosPeriodo[]
}

export default function Dashboard() {
  const [dados, setDados] = useState<DadosCasa>({})
  const [abaSelecionada, setAbaSelecionada] = useState<string>('Lotogreen')
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    fetch('/dados.json')
      .then(res => res.json())
      .then(data => {
        setDados(data)
        setAbaSelecionada(Object.keys(data)[0] || 'Lotogreen')
        setCarregando(false)
      })
      .catch(err => {
        console.error('Erro ao carregar dados:', err)
        setCarregando(false)
      })
  }, [])

  if (carregando) return <div className="container"><div className="card">Carregando dados...</div></div>

  const casas = Object.keys(dados)
  const dadosAtivos = dados[abaSelecionada] || []

  // Calcula métricas
  const totalInvestido = dadosAtivos.reduce((sum, d) => sum + d.investimento, 0)
  const totalSeguidores = dadosAtivos.length > 0 ? dadosAtivos[dadosAtivos.length - 1].seguidores : 0
  const totalNovosSeg = dadosAtivos.reduce((sum, d) => sum + d.novos_seguidores, 0)
  const custoPorSegMedio = totalNovosSeg > 0 ? totalInvestido / totalNovosSeg : 0

  return (
    <div className="container">
      <div className="header">
        <h1>📊 Dashboard de Tendências Instagram</h1>
        <p>Análise de Crescimento por Período • Sabiá Gaming</p>
      </div>

      {/* ABAS */}
      <div className="tabs">
        {casas.map(casa => (
          <button
            key={casa}
            className={`tab-button ${abaSelecionada === casa ? 'active' : ''}`}
            onClick={() => setAbaSelecionada(casa)}
          >
            {casa === 'Lotogreen' ? '🟢 Lotogreen' : '🔵 BR4BET'}
          </button>
        ))}
      </div>

      {/* MÉTRICAS RESUMIDAS */}
      <div className="card">
        <h2>📈 Resumo • {abaSelecionada}</h2>
        <div className="metric-grid">
          <div className="metric">
            <div className="metric-label">Seguidores Atuais</div>
            <div className="metric-value">{totalSeguidores.toLocaleString('pt-BR')}</div>
          </div>
          <div className="metric">
            <div className="metric-label">Novos Seguidores</div>
            <div className="metric-value">+{totalNovosSeg.toLocaleString('pt-BR')}</div>
          </div>
          <div className="metric">
            <div className="metric-label">Investimento Total</div>
            <div className="metric-value">R$ {totalInvestido.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</div>
          </div>
          <div className="metric">
            <div className="metric-label">Custo Médio/Seguidor</div>
            <div className="metric-value">R$ {custoPorSegMedio.toFixed(2)}</div>
          </div>
        </div>
      </div>

      {/* GRÁFICO DE SEGUIDORES */}
      <div className="card">
        <h2>📊 Crescimento de Seguidores por Período</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={dadosAtivos} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
            <XAxis
              dataKey="data"
              angle={-45}
              textAnchor="end"
              height={80}
              tick={{ fontSize: 12 }}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              formatter={(value) => value.toLocaleString('pt-BR')}
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e8eaed' }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="seguidores"
              stroke="#1431fd"
              dot={{ fill: '#1431fd', r: 4 }}
              strokeWidth={2}
              name="Seguidores"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* GRÁFICO DE NOVOS SEGUIDORES */}
      <div className="card">
        <h2>🎯 Novos Seguidores por Dia</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={dadosAtivos} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
            <XAxis
              dataKey="data"
              angle={-45}
              textAnchor="end"
              height={80}
              tick={{ fontSize: 12 }}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              formatter={(value) => value.toLocaleString('pt-BR')}
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e8eaed' }}
            />
            <Legend />
            <Bar
              dataKey="novos_seguidores"
              fill="#1431fd"
              name="Novos Seguidores"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* GRÁFICO DE CUSTO POR SEGUIDOR */}
      <div className="card">
        <h2>💰 Custo por Seguidor (Tendência)</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={dadosAtivos} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
            <XAxis
              dataKey="data"
              angle={-45}
              textAnchor="end"
              height={80}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              label={{ value: 'R$', angle: -90, position: 'insideLeft' }}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              formatter={(value) => ['R$ ' + (value as number).toFixed(2), 'Custo']}
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e8eaed' }}
            />
            <Legend />
            <Line
              type="monotone"
              dataKey="custo_por_seg"
              stroke="#ff6b6b"
              dot={{ fill: '#ff6b6b', r: 4 }}
              strokeWidth={2}
              name="Custo/Seguidor"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* INVESTIMENTO */}
      <div className="card">
        <h2>💵 Investimento Diário</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={dadosAtivos} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e8eaed" />
            <XAxis
              dataKey="data"
              angle={-45}
              textAnchor="end"
              height={80}
              tick={{ fontSize: 12 }}
            />
            <YAxis
              label={{ value: 'R$', angle: -90, position: 'insideLeft' }}
              tick={{ fontSize: 12 }}
            />
            <Tooltip
              formatter={(value) => ['R$ ' + (value as number).toFixed(2), 'Investimento']}
              contentStyle={{ backgroundColor: '#fff', border: '1px solid #e8eaed' }}
            />
            <Bar
              dataKey="investimento"
              fill="#4ecdc4"
              name="Investimento"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
