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

const ModalShowOutros = ({ isOpen, onClose, dataObra }) => {
  if (!isOpen) return null;

  const impostos = dataObra;

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>Detalhes dos outros</ModalTitle>
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
              <TableCell>CESTA BÁSICA</TableCell>
              <TableCell>{impostos.fgts}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>CAFÉ</TableCell>
              <TableCell>{impostos.salario_13}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>VALE TRANSPORTE</TableCell>
              <TableCell>{impostos.vale_transporte}</TableCell>
            </TableRow>
            {/* <TableRow>
                <TableCell>FGTS 13º SALÁRIO</TableCell>
                <TableCell>{impostos.fgts_13_Salario}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>FÉRIAS</TableCell>
                <TableCell>{impostos.ferias}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>1/3 FÉRIAS</TableCell>
                <TableCell>{impostos.um_terco_ferias}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>MULTA 50% FGTS</TableCell>
                <TableCell>{impostos.multa_fgts}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>BDI</TableCell>
                <TableCell>{impostos.valor_20_por_cento}</TableCell>
              </TableRow> */}
            <TableRow>
              <TableCell
                style={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }}
              >
                TOTAL
              </TableCell>
              <TableCell
                style={{ fontWeight: "bold", backgroundColor: "#f0f0f0" }}
              >
                {impostos.total_outros}
              </TableCell>
            </TableRow>
          </TableBody>
        </ModalTable>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ModalShowOutros;
