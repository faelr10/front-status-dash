import {
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
  ModalTable,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "./style";

const ModalShowImpostos = ({ isOpen, onClose, dataObra }) => {
  if (!isOpen) return null;

  const impostos = dataObra;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Detalhes dos impostos</ModalTitle>
        </ModalHeader>
        <ModalTable>
          <TableHeader>
            <TableRow>
              <TableCell>IMPOSTOS</TableCell>
              <TableCell>VALOR</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>FGTS</TableCell>
              <TableCell>R$ {impostos.taxes.fgts}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>13º SALÁRIO</TableCell>
              <TableCell>R$ {impostos.taxes.thirteen_salary}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>FGTS 13º SALÁRIO</TableCell>
              <TableCell>R$ {impostos.taxes.fgts_13_salary}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>FÉRIAS</TableCell>
              <TableCell>R$ {impostos.taxes.vacation}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>1/3 FÉRIAS</TableCell>
              <TableCell>R$ {impostos.taxes.vacation_one_third}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>MULTA 50% FGTS</TableCell>
              <TableCell>R$ {impostos.taxes.fine_dismissal}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>BDI</TableCell>
              <TableCell>R$ {impostos.taxes.bdi}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                style={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }}
              >
                TOTAL
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }}
              >
                {impostos.total_impostos}
              </TableCell>
            </TableRow>
          </TableBody>
        </ModalTable>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalShowImpostos;
