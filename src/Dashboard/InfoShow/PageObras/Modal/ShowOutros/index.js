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
              <TableCell>R$ {impostos.others.basic_food_basket}</TableCell>
            </TableRow>
            
            <TableRow>
              <TableCell>CAFÉ</TableCell>
              <TableCell>R$ {impostos.others.coffe_dailly}</TableCell>
            </TableRow>

            <TableRow>
              <TableCell>VALE TRANSPORTE</TableCell>
              <TableCell>R$ {impostos.others.transport}</TableCell>
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
