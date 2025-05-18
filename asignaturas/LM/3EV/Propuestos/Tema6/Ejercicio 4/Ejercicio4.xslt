<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" indent="yes"/>

  <!-- Formato para fechas de YYYY-MM-DD a DD/MM/YYYY -->
  <xsl:template name="format-date">
    <xsl:param name="date"/>
    <xsl:value-of select="substring($date, 9, 2)"/>/<xsl:value-of select="substring($date, 6, 2)"/>/<xsl:value-of select="substring($date, 1, 4)"/>
  </xsl:template>

  <!-- Formato para cantidades con coma decimal y dos decimales -->
  <xsl:decimal-format name="my-decimal-format" decimal-separator=',' grouping-separator='.'/>
  <xsl:template name="format-amount">
    <xsl:param name="amount"/>
    <xsl:value-of select="format-number($amount, '#,00', 'my-decimal-format')"/>
  </xsl:template>

  <!-- Formato para el número de cuenta bancaria (4.4.2.10) -->
   <xsl:template name="format-account">
    <xsl:param name="account"/>
    <xsl:value-of select="substring($account, 1, 4)"/>.<xsl:value-of select="substring($account, 5, 4)"/>.<xsl:value-of select="substring($account, 9, 2)"/>.<xsl:value-of select="substring($account, 11, 10)"/>
  </xsl:template>


  <xsl:template match="/reciboBancario">
    <html>
      <head>
        <title>Recibo Bancario</title>
        <style type="text/css">
          /* Estilos básicos para parecerse al recibo */
          body { font-family: sans-serif; margin: 20px; }
          .receipt {
            border: 1px solid #ccc;
            padding: 15px;
            width: 700px; /* Ajusta según necesites */
            margin: 20px auto;
            box-shadow: 2px 2px 5px #888888;
            background-color: #fff;
          }
          .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom: 1px solid #eee;
            padding-bottom: 10px;
            margin-bottom: 10px;
          }
          .header img {
            max-height: 40px;
            margin-right: 10px;
            vertical-align: middle;
          }
          .header-left {
              display: flex;
              align-items: center;
              font-weight: bold;
          }
           .header-right {
              text-align: right;
              font-size: 0.9em;
           }

          .main-info {
            font-size: 0.9em;
            margin-bottom: 15px;
            padding-bottom: 10px;
            border-bottom: 1px solid #eee;
          }
           .main-info span {
               margin-right: 15px; /* Espacio entre los elementos de la línea */
           }
           .main-info span:last-child {
               margin-right: 0;
           }

          .title {
            text-align: center;
            font-size: 1.2em;
            font-weight: bold;
            margin: 15px 0 10px 0;
            background-color: #e0e0e0; /* Gris claro */
            padding: 5px;
            border-top: 1px solid #ccc;
            border-bottom: 1px solid #ccc;
          }

          table {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 10px;
          }
          th, td {
            padding: 8px;
            text-align: left;
            vertical-align: top;
          }
          .info-row td {
              border-bottom: 1px solid #ddd;
              padding-bottom: 10px;
          }

          h4 {
              margin-top: 15px;
              margin-bottom: 5px;
              font-size: 1em;
              font-weight: bold;
          }

          .concepts-list {
              margin-left: 15px;
              margin-bottom: 15px;
          }
          .concept-item {
              margin-bottom: 5px;
              position: relative;
              padding-left: 10px; /* Espacio para el guion */
          }
           .concept-item::before {
               content: "-";
               position: absolute;
               left: 0;
               font-weight: bold;
           }


          .fine-print {
            font-size: 0.8em;
            color: #555;
            margin-bottom: 15px;
            padding: 10px;
            border-top: 1px solid #eee;
            border-bottom: 1px solid #eee;
            background-color: #f9f9f9;
          }

           .summary-row td {
              border-top: 2px solid #ccc; /* Borde más grueso */
              font-weight: bold;
              padding-top: 10px;
           }

          .footer {
            font-size: 0.9em;
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid #eee;
             line-height: 1.5; /* Espacio entre líneas */
          }

        </style>
      </head>
      <body>
        <div class="receipt">

          <!-- Encabezado: Logo, Nombre del banco y Página -->
          <div class="header">
            <div class="header-left">
               <xsl:if test="banco/logo">
                 <img src="https://cdn.worldvectorlogo.com/logos/banco-pichincha-nuevo-logo-fondo-amarillo.svg" alt="Logo del banco"/>
               </xsl:if>
               <xsl:value-of select="banco/nombre"/>
            </div>
            <div class="header-right">Página 1 de 1</div>
          </div>

          <!-- Información principal: Fecha, Oficina, Moneda, Recibo, Referencia -->
          <div class="main-info">
              <span>Fecha: <xsl:call-template name="format-date"><xsl:with-param name="date" select="datosRecibo/fechaEmision"/></xsl:call-template></span>
              <span>Oficina: <xsl:value-of select="banco/sucursal"/></span>
              <span>Moneda: <xsl:value-of select="cuentaBancaria/@moneda"/> N°</span>
              <span>recibo: <xsl:value-of select="datosRecibo/numeroRecibo"/></span>
              <span>Referencia: <xsl:value-of select="datosRecibo/referencia"/></span>
          </div>

          <!-- Título "RECIBO" -->
          <div class="title">RECIBO</div>

          <!-- Fila de información: Entidad emisora, NIF, Titular -->
           <table>
               <tr class="info-row">
                   <td>Entidad emisora: <xsl:value-of select="datosRecibo/entidadEmisora/nombre"/></td>
                   <td>NIF entidad emisora: <xsl:value-of select="datosRecibo/entidadEmisora/nif"/></td>
                   <td>Titular recibo: <xsl:value-of select="titular/nombre"/></td>
               </tr>
           </table>

          <!-- Sección de Movimientos/Conceptos -->
          <h4>Movimientos</h4>
          <div class="concepts-list">
            <xsl:apply-templates select="datosRecibo/conceptos/concepto"/>
          </div>

          <!-- Texto de letra pequeña / Contacto -->
          <p class="fine-print">Si desea devolver el recibo contacte con su oficina, con el servicio de atención telefónica o con la página web www.bancoseguro.com</p>

          <!-- Fila de resumen: Importe, Número de cuenta, Fecha valor -->
           <table>
               <tr class="summary-row">
                   <td>Importe: <xsl:call-template name="format-amount"><xsl:with-param name="amount" select="datosRecibo/importeTotal"/></xsl:call-template> <xsl:value-of select="cuentaBancaria/@moneda"/>s</td>
                   <td>Nº cuenta: <xsl:call-template name="format-account"><xsl:with-param name="account" select="cuentaBancaria/numero"/></xsl:call-template></td>
                   <td>Fecha valor: <xsl:call-template name="format-date"><xsl:with-param name="date" select="datosRecibo/fechaValor"/></xsl:call-template></td>
               </tr>
           </table>

          <!-- Pie de página: Titular, NIF emisor, Referencia -->
          <div class="footer">
             Titular: <xsl:value-of select="titular/nombre"/>
             <br/>
             Datos entidad Emisora: nif: <xsl:value-of select="datosRecibo/entidadEmisora/nif"/>
             <br/>
             Referencia: <xsl:value-of select="datosRecibo/referencia"/>
             <!-- Nota: La referencia en la imagen es diferente ('F123456 - RM Madrid'),
                  usamos la que está en tu XML ('a1b2c3d4e5f6g7h8') -->
          </div>

        </div>
      </body>
    </html>
  </xsl:template>

  <!-- Template para cada concepto individual -->
  <xsl:template match="concepto">
    <div class="concept-item">
      <xsl:value-of select="descripcion"/>: <xsl:call-template name="format-amount"><xsl:with-param name="amount" select="cantidad"/></xsl:call-template> <xsl:value-of select="/reciboBancario/cuentaBancaria/@moneda"/>s
    </div>
  </xsl:template>

</xsl:stylesheet>