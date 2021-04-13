using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Activities
{
    public class Create
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _conext;
            public Handler(DataContext conext)
            {
                _conext = conext;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                _conext.Activities.Add(request.Activity);

                await _conext.SaveChangesAsync();

                return Unit.Value;
            }
        }
    }
}