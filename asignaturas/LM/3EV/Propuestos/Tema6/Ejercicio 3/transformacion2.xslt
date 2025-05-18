<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:key name="paisKey" match="museo" use="pais"/>

  <xsl:template match="/museos">
    <html>
      <head>
        <title>Museos agrupados por país</title>
        <style>
          body { font-family: Arial; margin: 40px; }
          h2 { color: #2c3e50; }
          ul { list-style-type: square; padding-left: 20px; }
        </style>
      </head>
      <body>
        <h1>Listado de museos por país</h1>
        <xsl:for-each select="museo[generate-id() = generate-id(key('paisKey', pais)[1])]">
          <h2><xsl:value-of select="pais"/></h2>
          <ul>
            <xsl:for-each select="key('paisKey', pais)">
              <li>
                <strong><xsl:value-of select="nombre"/></strong> — 
                <xsl:value-of select="ciudad"/>
              </li>
            </xsl:for-each>
          </ul>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
