<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/museos">
    <html>
      <head>
        <title>Museos</title>
        <style>
          body { font-family: Arial; margin: 40px; }
          h1 { color: #2c3e50; }
          h2 { margin-top: 30px; background-color: #b2d3ea; padding: 8px; color: #2c3e50; }
          ul, ol { padding-left: 20px; }
          li { margin-bottom: 5px; }
        </style>
      </head>
      <body>
        <h1>Listado de Museos</h1>

        <xsl:apply-templates select="contenidoRelleno"/>

        <h2>Museos</h2>
        <ul>
          <xsl:for-each select="museo">
            <li>
              <strong><xsl:value-of select="nombre"/></strong><br/>
              <xsl:value-of select="concat(ciudad, ' (', pais, ')')"/>
            </li>
          </xsl:for-each>
        </ul>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="contenidoRelleno">
    <h2><xsl:value-of select="@descripcion"/></h2>
    <ol>
      <xsl:for-each select="elementos/elemento">
        <li><xsl:value-of select="."/></li>
      </xsl:for-each>
    </ol>
  </xsl:template>

</xsl:stylesheet>
