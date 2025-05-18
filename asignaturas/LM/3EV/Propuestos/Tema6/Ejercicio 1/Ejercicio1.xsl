<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="text" encoding="UTF-8"/>
    
    <xsl:template match="/">
        <xsl:for-each select="fp/modulos/modulo">
        <xsl:variable name="total" select="number(duracion)"/>
        <xsl:variable name="horasSemanales" select="ceiling($total div 20)"/>
            Módulo: <xsl:value-of select="nombre"/>
            (<xsl:value-of select="$horasSemanales"/> horas semanales)
            <xsl:if test="position() != last()">
                    <xsl:text>&#10;</xsl:text>
            </xsl:if>
        </xsl:for-each>
    </xsl:template>
</xsl:stylesheet>