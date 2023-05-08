import { useState } from "react";
import Button from "../../components/atoms/Button";
import client, { API } from "../../shared/api/api";
import { useQuery } from "@tanstack/react-query";
import RegistrationForm from "../../components/organisms/RegistrationForm/RegistrationForm";
import Modal from "../../components/molecules/Modal/Modal";
import {
  Container,
  ListContainer,
  List,
  ButtonContainer,
  PaginationButton,
} from "./style";
import ListItem from "../../components/molecules/ListItem/ListItem";

const ClientListPage = () => {
  const [showCreate, setshowCreate] = useState(false);
  const openCreate = () => setshowCreate(true);
  const closeCreate = () => {
    setreservationInEdit(null);
    setshowCreate(false);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const [reservationInEdit, setreservationInEdit] = useState(null);
  let totalPages = 0;

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["clients"],
    queryFn: () => client.get(API.baseUrl.clients),
    select: (todos) => {
      totalPages = Math.ceil(todos.length / 10);
      return todos;
    },
  });

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) {
      return;
    }
    setCurrentPage(newPage);
  };

  const updateReservation = async (customer) => {
    try {
      console.log(customer);
      await client.put(API.baseUrl.clients + customer._id, customer);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const createReservation = async (customer) => {
    try {
      await client.post(API.baseUrl.clients, customer);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteReservation = async (customer) => {
    try {
      await client.delete(API.baseUrl.clients + customer._id);
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  const renderClients = () => {
    if (isLoading) {
      return <div>Loading...</div>;
    }
    if (!data?.length) {
      return <div>No clients found.</div>;
    }
    return (
      <List>
        {data
          .slice((currentPage - 1) * 10, currentPage * 10)
          .map((reservation) => (
            <ListItem
              key={`${reservation._id} ${Math.random()} `}
              client={reservation}
              onEdit={(reservation) => {
                setreservationInEdit(reservation);
                setshowCreate(true);
              }}
            />
          ))}
      </List>
    );
  };

  return (
    <Container>
      <Button
        width={"100px"}
        action={openCreate}
        text={"Register"}
        type='submit'
      />
      <ListContainer>
        {renderClients()}
        {totalPages > 1 && (
          <ButtonContainer>
            <PaginationButton
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
            >
              Prev
            </PaginationButton>
            {Array.from({ length: totalPages }, (_, index) => (
              <PaginationButton
                key={index}
                active={currentPage === index + 1}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </PaginationButton>
            ))}
            <PaginationButton
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
            >
              Next
            </PaginationButton>
          </ButtonContainer>
        )}
      </ListContainer>
      {showCreate && (
        <Modal onClose={closeCreate}>
          <RegistrationForm
            closeModal={closeCreate}
            onCreate={createReservation}
            onUpdate={updateReservation}
            onDelete={deleteReservation}
            reservation={reservationInEdit}
          />
        </Modal>
      )}
    </Container>
  );
};

export default ClientListPage;
