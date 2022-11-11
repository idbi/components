type Error = {
  code?: string;
  message: string;
};

interface Result {
  success: boolean;
  error: Error | null;
}

export const validateFileSize = (file: File, maxKBSize: number = 1024 * 8) => {
  let success = true;
  let error: Result["error"] = null;

  if (file.size / 1024 > maxKBSize) {
    success = false;
    error = {
      code: "F0001",
      message: `El archivo ${file.name} pesa ${(
        file.size /
        1024 /
        1024
      ).toFixed(2)} MB. Intenta subir una imagen menor a ${
        maxKBSize / 1024
      } MB `,
    };
  }

  const result: Result = {
    success,
    error,
  };

  return result;
};
