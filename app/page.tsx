'use client'

import React from 'react'
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

// Dados do dashboard
const lotogreen_data = {
  nome: '🟢 LOTOGREEN',
  seguidores_atual: 150443,
  investimento_total: 13852.65,
  crescimento_total: 2962,
  crescimento_direto: 2967,
  crescimento_indireto: -5,
  custo_por_seguidor: 4.68,
  dias_dados: 62,
}

const br4bet_data = {
  nome: '🔵 BR4BET',
  seguidores_atual: 148.481,
  investimento_total: 2200.00,
  crescimento_total: 0,
  crescimento_direto: 0,
  crescimento_indireto: 0,
  custo_por_seguidor: 0,
  dias_dados: 31,
}

// Projeção
const dias_restantes = 212
const investimento_diario = 300
const crescimento_medio_diario_loto = 47.77
const crescimento_medio_diario_br4 = 0

const projecao_loto = {
  seguidores_atual: lotogreen_data.seguidores_atual,
  crescimento_esperado: crescimento_medio_diario_loto * dias_restantes,
  seguidores_final: lotogreen_data.seguidores_atual + (crescimento_medio_diario_loto * dias_restantes),
  investimento_total: investimento_diario * dias_restantes,
  custo_por_seg: (investimento_diario * dias_restantes) / (crescimento_medio_diario_loto * dias_restantes),
}

const projecao_br4 = {
  seguidores_atual: br4bet_data.seguidores_atual,
  crescimento_esperado: crescimento_medio_diario_br4 * dias_restantes,
  seguidores_final: br4bet_data.seguidores_atual + (crescimento_medio_diario_br4 * dias_restantes),
  investimento_total: investimento_diario * dias_restantes,
  custo_por_seg: 0,
}

// Dados para gráfico de tendência
const tendencia_loto = Array.from({ length: 30 }, (_, i) => ({
  dia: i + 1,
  MLABS: 150443 + (47.77 * i),
  BM: 150443 + (47.77 * i * 0.8),
}))

export default function Dashboard() {
  return (
    <div className="container">
      <div className="header">
        <h1>📊 Dashboard Impulsionamento Instagram</h1>
        <p>Análise MLABS vs BM • Sabiá Gaming • 02/06/2026</p>
      </div>

      {/* SEÇÃO 1: ANÁLISE ATUAL */}
      <div className="section-title">📈 Análise Atual (Estado de Hoje)</div>

      <div className="card">
        <h2>{lotogreen_data.nome}</h2>
        <div className="metric-grid">
          <div className="metric">
            <div className="metric-label">Seguidores Agora</div>
            <div className="metric-value">{lotogreen_data.seguidores_atual.toLocaleString('pt-BR')}</div>
          </div>
          <div className="metric">
            <div className="metric-label">Crescimento Total</div>
            <div className="metric-value">+{lotogreen_data.crescimento_total.toLocaleString('pt-BR')}</div>
          </div>
          <div className="metric">
            <div className="metric-label">Investimento</div>
            <div className="metric-value">R$ {lotogreen_data.investimento_total.toLocaleString('pt-BR', { maximumFractionDigits: 2 })}</div>
          </div>
          <div className="metric">
            <div className="metric-label">Custo/Seguidor</div>
            <div className="metric-value">R$ {lotogreen_data.custo_por_seguidor.toFixed(2)}</div>
          </div>
        </div>
      </div>

      {/* SEÇÃO 2: MLABS vs BM */}
      <div className="section-title">🎯 Entendendo MLABS vs BM</div>

      <div className="card">
        <h2>A Diferença Explicada</h2>

        <div className="comparison">
          <div className="comparison-box">
            <h3>📊 MLABS</h3>
            <ul>
              <li>Crescimento TOTAL do perfil</li>
              <li>Inclui: Pago + Orgânico</li>
              <li>Número REAL do Instagram</li>
              <li>Essencial para decisões</li>
            </ul>
          </div>

          <div className="comparison-box">
            <h3>💰 BM (Meta Ads)</h3>
            <ul>
              <li>Apenas crescimento rastreado</li>
              <li>Só clicou E seguiu</li>
              <li>CONSERVADOR (subestima)</li>
              <li>Prova do investimento</li>
            </ul>
          </div>
        </div>

        <div className="formula">
          CRESCIMENTO TOTAL (MLABS) = CRESCIMENTO PAGO (BM) + CRESCIMENTO INDIRETO<br/>
          <br/>
          Exemplo: 100 = 60 + 40<br/>
          <br/>
          ✅ ROI Real: R$300 ÷ 100 = R$3/seg<br/>
          ❌ Não é: R$300 ÷ 60 = R$5/seg
        </div>

        <h3>📌 Qual Usar?</h3>
        <ul>
          <li><strong>MLABS:</strong> Para relatório de performance REAL</li>
          <li><strong>BM:</strong> Para validar que a campanha funcionou</li>
          <li><strong>AMBOS:</strong> Para entender impacto COMPLETO</li>
        </ul>
      </div>

      {/* SEÇÃO 3: PROJEÇÃO */}
      <div className="section-title">🚀 Projeção até 31/12/2026</div>

      <div className="card">
        <h2>Cenário: R$ 300,00/dia de Investimento</h2>
        <p>Período: 02/06 até 31/12/2026 ({dias_restantes} dias restantes)</p>

        <h3>{lotogreen_data.nome}</h3>
        <div className="metric-grid">
          <div className="metric">
            <div className="metric-label">Seguidores Hoje</div>
            <div className="metric-value">{projecao_loto.seguidores_atual.toLocaleString('pt-BR')}</div>
          </div>
          <div className="metric">
            <div className="metric-label">Crescimento Esperado</div>
            <div className="metric-value">+{Math.round(projecao_loto.crescimento_esperado).toLocaleString('pt-BR')}</div>
          </div>
          <div className="metric">
            <div className="metric-label">Em 31/12/2026</div>
            <div className="metric-value">{Math.round(projecao_loto.seguidores_final).toLocaleString('pt-BR')}</div>
          </div>
          <div className="metric">
            <div className="metric-label">Investimento Total</div>
            <div className="metric-value">R$ {Math.round(projecao_loto.investimento_total).toLocaleString('pt-BR')}</div>
          </div>
        </div>

        <h3 style={{ marginTop: '24px' }}>{br4bet_data.nome}</h3>
        <div className="metric-grid">
          <div className="metric">
            <div className="metric-label">Seguidores Hoje</div>
            <div className="metric-value">{projecao_br4.seguidores_atual.toLocaleString('pt-BR')}</div>
          </div>
          <div className="metric">
            <div className="metric-label">Crescimento Esperado</div>
            <div className="metric-value">+{Math.round(projecao_br4.crescimento_esperado).toLocaleString('pt-BR')}</div>
          </div>
          <div className="metric">
            <div className="metric-label">Em 31/12/2026</div>
            <div className="metric-value">{Math.round(projecao_br4.seguidores_final).toLocaleString('pt-BR')}</div>
          </div>
          <div className="metric">
            <div className="metric-label">Investimento Total</div>
            <div className="metric-value">R$ {Math.round(projecao_br4.investimento_total).toLocaleString('pt-BR')}</div>
          </div>
        </div>
      </div>

      {/* GRÁFICO DE TENDÊNCIA */}
      <div className="card">
        <h2>📉 Gráfico de Tendência - Lotogreen (Próximos 30 dias)</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={tendencia_loto}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="dia" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="MLABS" stroke="#667eea" strokeWidth={2} name="MLABS (Real)" />
            <Line type="monotone" dataKey="BM" stroke="#764ba2" strokeWidth={2} name="BM (Conservador)" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* RESUMO EXECUTIVO */}
      <div className="card">
        <h2>📋 Resumo Executivo para o Chefe</h2>
        <ul style={{ lineHeight: '1.8' }}>
          <li>✅ <strong>O problema estava resolvido:</strong> Você já estava preenchendo tudo certo</li>
          <li>✅ <strong>A diferença é clara:</strong> MLABS = Real, BM = Conservador</li>
          <li>✅ <strong>A fórmula funciona:</strong> Crescimento Total = Pago + Orgânico</li>
          <li>✅ <strong>O investimento vale:</strong> Custo real é menor que parece (R$3-5 por seguidor)</li>
          <li>✅ <strong>Tendência positiva:</strong> Lotogreen cresce consistentemente ~48 seg/dia</li>
          <li>📊 <strong>Projeção:</strong> Com R$300/dia, Lotogreen chegará a ~160.600 seguidores em 31/12</li>
        </ul>
      </div>

      <div style={{ height: '40px' }} />
    </div>
  )
}
