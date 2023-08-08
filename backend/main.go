package main

import (
	"os"
	"os/exec"
)

func main() {
	// Defina o conteúdo HTML que você deseja converter em PDF
	htmlContent := `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Exemplo HTML para PDF</title>
        </head>
        <body style = "background-color:red">
            <h1>Olá, Mundo!</h1>
            <p>Este é um exemplo de HTML convertido para PDF usando Golang.</p>
        </body>
        </html>
    `

	// Crie um arquivo temporário para o HTML
	htmlFile, err := os.CreateTemp("/home/patriciasilva/Documentos/estudo/Myportifolio/backend/", "html-to-pdf-*.html")
	if err != nil {
		panic(err)
	}
	defer os.Remove(htmlFile.Name())

	// Escreva o conteúdo HTML no arquivo
	_, err = htmlFile.WriteString(htmlContent)
	if err != nil {
		panic(err)
	}

	// Crie o nome do arquivo PDF de saída
	// pdfFile := "output.pdf"
	docFile := "output.doc"

	// Execute o comando "wkhtmltopdf" para converter o HTML em PDF
	// cmd := exec.Command("wkhtmltopdf", htmlFile.Name(), pdfFile)
	cmd := exec.Command("wkhtmltopdf", htmlFile.Name(), docFile)

	err = cmd.Run()
	if err != nil {
		panic(err)
	}

	// println("PDF criado com sucesso:", pdfFile)
	println("PDF criado com sucesso:", docFile)
}
