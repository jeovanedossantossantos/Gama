lista = []

while True:
    valor = float(input("Digite uma numero!"))
    lista.append(valor)
    if(valor>0):
        print("Este valor é maior que ZERO!")

    elif(valor < 0):
        print("Este valor é menor que ZERO!")
    else:
        print("Este valor é igual a ZERO!")
        break
print("Programa Encerrado")
print("Os valores que foram digitados foram...")
for i in range(len(lista)):
    print(lista[i])