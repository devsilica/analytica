import {
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { toast } from "sonner";

import {
  getCustomers,
  deleteCustomer,
  createCustomer,
} from "@/lib/api/customers";

export function useCustomers() {
  const queryClient =
    useQueryClient();

  const query =
    useQuery({
      queryKey: ["customers"],
      queryFn: getCustomers,
    });

  const deleteMutation =
    useMutation({

      mutationFn:
        deleteCustomer,

      onMutate: async (
        customerId
      ) => {

        await queryClient.cancelQueries({
          queryKey: ["customers"],
        });

        const previousCustomers =
          queryClient.getQueryData(
            ["customers"]
          );

        queryClient.setQueryData(
          ["customers"],
          (old: any[] = []) =>

            old.filter(
              (customer) =>

                customer.id !==
                customerId
            )
        );

        return {
          previousCustomers,
        };

      },

      onError: (
        _error,
        _customerId,
        context
      ) => {

        queryClient.setQueryData(

          ["customers"],

          context?.previousCustomers

        );

        toast.error(
          "Delete failed"
        );

      },

      onSuccess: () => {

        toast.success(
          "Customer deleted"
        );

      },

      onSettled: () => {

        queryClient.invalidateQueries({

          queryKey: [
            "customers",
          ],

        });

      },

    });

  const createMutation =
    useMutation({

      mutationFn:
        createCustomer,

      onSuccess: (
        newCustomer
      ) => {

        queryClient.setQueryData(

          ["customers"],

          (
            old: any[] = []
          ) => [

            newCustomer,

            ...old,

          ]

        );

        toast.success(
          "Customer created"
        );

      },

      onError: () => {

        toast.error(
          "Create failed"
        );

      },

    });

  return {

    customers:
      query.data ?? [],

    isLoading:
      query.isLoading,

    createMutation,

    deleteMutation,

  };
}