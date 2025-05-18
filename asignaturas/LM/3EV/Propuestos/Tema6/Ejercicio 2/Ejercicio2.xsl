<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <html lang="es">
    <head>
        <title>Currículum</title>
        <style>
            body { 
                font-family: Arial, sans-serif; margin: 40px; 
            }
            h1 { 
                color: #2c3e50;
                margin-bottom: 40px;
            }
            h3 { 
                background-color: #b2d3ea;
                text-align: right; color: #2c3e50; padding: 10px;
            }
            table {
                width: 100%; border-collapse: collapse; margin: 20px 0;
            }
            th { 
                border: none; padding: 8px; 
            }
            td {
                border: none; padding: 8px;
            }
            th { 
                background-color: #ffff; 
            }
            ul {
                list-style-type: disc;
                padding-left: 20px;
            }
            ol[type="a"] {
                list-style-type: lower-alpha;
                padding-left: 30px;
            }
            body {
                margin-left: 20%;
                margin-right: 20%;
            }
            img{
                width: 75px;
                height: 95px;
                margin-left: 20px;
            }
            div{
                justify-content: space-between;
                display: flex;
            }
        </style>
    </head>
    <body>
        <div>
            <h1><xsl:value-of select="curriculum/datosPersonales/nombre"/></h1>
            <img src="https://cdn-icons-png.freepik.com/512/6356/6356241.png"/>
        </div>
        <h3>Datos Personales</h3>
        <xsl:call-template name="datosPersonales"/>
        <h3>Formación</h3>
        <xsl:call-template name="formacion"/>
        <h3>Idiomas</h3>
        <xsl:call-template name="idiomas"/>
        <h3>Experiencia Laboral</h3>
        <xsl:call-template name="experiencia"/>
        <h3>Otras Informaciones</h3>
        <p>Licencias de conducción → <xsl:value-of select="curriculum/otrasInformaciones/licencias/licencia"/></p>
        <p>Vehículo propio: <xsl:value-of select="curriculum/otrasInformaciones/propio"/></p>
        <p>Descripción personal</p>
        <p><xsl:value-of select="curriculum/otrasInformaciones/descripcion"/></p>
    </body>
    </html>
</xsl:template>


<xsl:template name="datosPersonales">
    
        <p>Fecha de nacimiento: <xsl:value-of select="curriculum/datosPersonales/fechaNacimiento"/></p>
        <p>Lugar de nacimiento: <xsl:value-of select="curriculum/datosPersonales/lugarNacimiento"/></p>
        <p>Estado civil: <xsl:value-of select="curriculum/datosPersonales/estadoCivil"/></p>
    
</xsl:template>


<xsl:template name="formacion">
    <table>
        <tr><th>Descripción</th><th>Lugar</th><th>Periodo</th></tr>
        <xsl:for-each select="curriculum/formacion/estudio">
            <tr>
                <td><xsl:value-of select="descripcion"/></td>
                <td><xsl:value-of select="lugar"/></td>
                <td>De <xsl:value-of select="periodo"/></td>
            </tr>
        </xsl:for-each>
    </table>
</xsl:template>


<xsl:template name="idiomas">
    <ul>
        <xsl:for-each select="curriculum/idiomas/idioma">
            <li>
                <xsl:value-of select="@nombre"/>
                <xsl:if test="@maternal='sí' or @maternal='sí­'">
                    (Materna)
                </xsl:if>
                <xsl:if test="nivel">
                    <ol type="a">
                        <xsl:if test="nivel/eo">
                            <li>EO: <xsl:value-of select="nivel/eo"/></li>
                        </xsl:if>
                        <xsl:if test="nivel/co">
                            <li>CO: <xsl:value-of select="nivel/co"/></li>
                        </xsl:if>
                        <xsl:if test="nivel/ee">
                            <li>EE: <xsl:value-of select="nivel/ee"/></li>
                        </xsl:if>
                        <xsl:if test="nivel/ce">
                            <li>CE: <xsl:value-of select="nivel/ce"/></li>
                        </xsl:if>
                    </ol>
                </xsl:if>
            </li>
        </xsl:for-each>
    </ul>
</xsl:template>




<xsl:template name="experiencia">
    <table>
        <tr><th>Lugar</th><th>Puesto</th><th>Periodo</th></tr>
        <xsl:for-each select="curriculum/experienciaLaboral/empleo">
            <tr>
                <td><xsl:value-of select="lugar"/></td>
                <td><xsl:value-of select="puesto"/></td>
                <td>De <xsl:value-of select="periodo"/></td>
            </tr>
        </xsl:for-each>
    </table>
</xsl:template>

</xsl:stylesheet>