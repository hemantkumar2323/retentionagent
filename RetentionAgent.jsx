import React, { useState } from 'react';

export default function RetentionAgent() {
  const [abandonedOrders, setAbandonedOrders] = useState([
    {
      name: 'Amit Sharma',
      product: 'Smart Shaker Bottle',
      value: '₹1,299',
      status: '⏳ WhatsApp Reminder Scheduled'
    },
    {
      name: 'Neha Patel',
      product: 'GlowSkin Serum Pack',
      value: '₹1,999',
      status: '✅ Email Recovery Sent'
    },
    {
      name: 'John D.',
      product: 'Wireless Car Vacuum',
      value: '₹1,499',
      status: '❌ No Response Yet'
    }
  ]);

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>🔁 RetentionAgent — Cart Recovery + CRM Sync</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '1.5rem' }}>
        <thead>
          <tr>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Customer</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Product</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Cart Value</th>
            <th style={{ borderBottom: '1px solid #ccc', padding: '0.5rem' }}>Recovery Status</th>
          </tr>
        </thead>
        <tbody>
          {abandonedOrders.map((order, idx) => (
            <tr key={idx}>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{order.name}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{order.product}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{order.value}</td>
              <td style={{ borderBottom: '1px solid #eee', padding: '0.5rem' }}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
