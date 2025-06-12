import pandas as pd
import numpy as np
from datetime import datetime

# Cargar el archivo Excel original
archivo = "COMPLETO ORIGINAL.xlsx"
df = pd.read_excel(archivo, sheet_name='Ventas')

# Fechas de asueto comunes en El Salvador
feriados = [
    "2025-01-01", "2025-04-17", "2025-04-18", "2025-05-01", "2025-06-17",
    "2025-08-06", "2025-09-15", "2025-11-02", "2025-12-25"
]
feriados = [pd.to_datetime(f) for f in feriados]

# Crear lista de fechas válidas
fechas = pd.date_range(start="2025-01-03", end="2025-12-31", freq="D")
fechas_validas = [f for f in fechas if f not in feriados]

# Aumentar tamaño de muestra si es muy pequeña
plantilla = pd.concat([df] * (500 // len(df) + 1), ignore_index=True)
columnas = df.columns.drop(["ID Venta", "Fecha"])

ventas_generadas = []
id_actual = 1

for fecha in fechas_validas:
    muestra = plantilla.sample(n=500, replace=True).reset_index(drop=True)
    muestra.insert(0, "ID Venta", range(id_actual, id_actual + 500))
    muestra.insert(1, "Fecha", [fecha] * 500)
    ventas_generadas.append(muestra)
    id_actual += 500

# Concatenar todo en un DataFrame
df_final = pd.concat(ventas_generadas, ignore_index=True)

# Guardar como archivo CSV
df_final.to_csv("VENTAS_2025_GENERADAS.csv", index=False, encoding='utf-8')

print("Archivo VENTAS_2025_GENERADAS.csv creado con éxito.")
